// src/components/layout/CookieConsent.tsx

import React, { useState, useEffect } from "react";
import type { CookieConsent as CookieConsentType } from "../../lib/types";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [consent, setConsent] = useState<CookieConsentType>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    checkConsentStatus();
  }, []);

  const checkConsentStatus = () => {
    const savedConsent = localStorage.getItem("userConsent");
    const consentTimestamp = localStorage.getItem("consentTimestamp");

    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent);
      setConsent({
        necessary: true,
        analytics: parsedConsent.analytics_storage === "granted",
        marketing: parsedConsent.ad_storage === "granted",
      });
      setShowFloatingButton(true);

      // Check if consent is older than 365 days
      if (consentTimestamp) {
        const daysSinceConsent =
          (Date.now() - parseInt(consentTimestamp)) / (1000 * 60 * 60 * 24);
        if (daysSinceConsent > 365) {
          localStorage.removeItem("userConsent");
          localStorage.removeItem("consentTimestamp");
          setShowBanner(true);
          setShowFloatingButton(false);
        }
      }
    } else {
      setShowBanner(true);
      setShowFloatingButton(false);
    }
  };

  const saveConsent = (consentData: any) => {
    localStorage.setItem("userConsent", JSON.stringify(consentData));
    localStorage.setItem("consentTimestamp", Date.now().toString());
  };

  const updateGoogleConsent = (consentData: any) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", consentData);

      // Dodaj event do dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        consent_analytics: consentData.analytics_storage,
        consent_marketing: consentData.ad_storage,
      });
    }
  };

  const acceptAllCookies = () => {
    const consentData = {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };

    saveConsent(consentData);
    updateGoogleConsent(consentData);
    setShowBanner(false);
    setShowFloatingButton(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_update" });
  };

  const rejectAllCookies = () => {
    const consentData = {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };

    saveConsent(consentData);
    updateGoogleConsent(consentData);
    setShowBanner(false);
    setShowFloatingButton(true);
    clearCookies();
  };

  const saveCustomSettings = () => {
    const consentData = {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
    };

    saveConsent(consentData);
    updateGoogleConsent(consentData);
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_update" });
  };

  const clearCookies = () => {
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substr(0, eqPos).trim() : c.trim();
      if (!name.startsWith("_consent") && !name.startsWith("userConsent")) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      }
    });
  };

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="cookie-banner">
          <div className="cookie-container">
            <div className="cookie-text">
              <h3>🍪 Ta strona używa plików cookies</h3>
              <p>
                Używamy plików cookies, aby zapewnić najlepszą jakość
                korzystania z naszej strony oraz do celów analitycznych i
                marketingowych. Możesz zarządzać swoimi preferencjami w każdej
                chwili.
              </p>
            </div>
            <div className="cookie-buttons">
              <button onClick={acceptAllCookies} className="btn-accept">
                Akceptuj wszystkie
              </button>
              <button onClick={rejectAllCookies} className="btn-reject">
                Odrzuć wszystkie
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="btn-settings"
              >
                Ustawienia
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div
          className="cookie-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowSettings(false);
          }}
        >
          <div className="cookie-modal-content">
            <div className="cookie-modal-header">
              <h2>Ustawienia plików cookies</h2>
              <p>
                Zarządzaj swoimi preferencjami dotyczącymi plików cookies.
                Możesz włączyć lub wyłączyć poszczególne kategorie.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Niezbędne</h3>
                <label className="cookie-switch">
                  <input type="checkbox" checked disabled />
                  <span className="slider"></span>
                </label>
              </div>
              <p>
                Te pliki cookies są niezbędne do prawidłowego funkcjonowania
                strony. Nie można ich wyłączyć.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Analityczne</h3>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent({ ...consent, analytics: e.target.checked })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <p>
                Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony,
                zbierając anonimowe informacje o ruchu na stronie.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <h3>Marketingowe</h3>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent({ ...consent, marketing: e.target.checked })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <p>
                Używane do wyświetlania spersonalizowanych reklam na podstawie
                Twoich zainteresowań.
              </p>
            </div>

            <div className="cookie-modal-footer">
              <a href="/polityka-prywatnosci" className="cookie-link">
                Polityka prywatności
              </a>
              <div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="btn-cancel"
                >
                  Anuluj
                </button>
                <button onClick={saveCustomSettings} className="btn-save">
                  Zapisz ustawienia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Settings Button */}
      {showFloatingButton && (
        <button
          className="cookie-floating"
          onClick={() => setShowSettings(true)}
          aria-label="Cookie settings"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </button>
      )}

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
          z-index: 99999;
          padding: 20px;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cookie-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }

        .cookie-text {
          flex: 1;
          min-width: 300px;
        }

        .cookie-text h3 {
          margin: 0 0 10px 0;
          font-size: 18px;
          color: #1a1a1a;
        }

        .cookie-text p {
          color: #333;
          font-size: 14px;
          line-height: 1.6;
        }

        .cookie-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn-accept,
        .btn-reject,
        .btn-settings,
        .btn-save,
        .btn-cancel {
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-accept,
        .btn-save {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .btn-accept:hover,
        .btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-reject,
        .btn-cancel {
          background: #f0f0f0;
          color: #333;
        }

        .btn-reject:hover,
        .btn-cancel:hover {
          background: #e0e0e0;
        }

        .btn-settings {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-settings:hover {
          background: #667eea;
          color: white;
        }

        .cookie-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .cookie-modal-content {
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .cookie-modal-header {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
        }

        .cookie-modal-header h2 {
          margin: 0 0 10px 0;
          color: #1a1a1a;
        }

        .cookie-category {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 10px;
        }

        .cookie-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .cookie-category h3 {
          margin: 0;
          font-size: 16px;
          color: #333;
        }

        .cookie-category p {
          margin: 0;
          font-size: 13px;
          color: #666;
          line-height: 1.5;
        }

        .cookie-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .cookie-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #667eea;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        input:disabled + .slider {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cookie-modal-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cookie-link {
          color: #667eea;
          text-decoration: none;
          font-size: 14px;
        }

        .cookie-link:hover {
          text-decoration: underline;
        }

        .cookie-floating {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 12px 20px;
          border-radius: 30px;
          cursor: pointer;
          z-index: 9998;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cookie-floating:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }

        @media (max-width: 768px) {
          .cookie-container {
            flex-direction: column;
            align-items: stretch;
          }

          .cookie-buttons {
            justify-content: center;
          }

          .cookie-modal-content {
            padding: 20px;
          }

          .cookie-floating {
            padding: 10px;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
