import{j as e}from"./jsx-runtime.BjG_zV1W.js";import{r as c}from"./index.CMFzYXQQ.js";const z=()=>{const[x,i]=c.useState(!1),[h,s]=c.useState(!1),[g,n]=c.useState(!1),[o,d]=c.useState({necessary:!0,analytics:!1,marketing:!1});c.useEffect(()=>{m()},[]);const m=()=>{const t=localStorage.getItem("userConsent"),r=localStorage.getItem("consentTimestamp");if(t){const a=JSON.parse(t);d({necessary:!0,analytics:a.analytics_storage==="granted",marketing:a.ad_storage==="granted"}),n(!0),r&&(Date.now()-parseInt(r))/864e5>365&&(localStorage.removeItem("userConsent"),localStorage.removeItem("consentTimestamp"),i(!0),n(!1))}else i(!0),n(!1)},l=t=>{localStorage.setItem("userConsent",JSON.stringify(t)),localStorage.setItem("consentTimestamp",Date.now().toString())},p=t=>{typeof window.gtag<"u"&&(window.gtag("consent","update",t),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"consent_update",consent_analytics:t.analytics_storage,consent_marketing:t.ad_storage}))},k=()=>{const t={analytics_storage:"granted",ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted"};l(t),p(t),i(!1),n(!0),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"consent_update"})},u=()=>{const t={analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"};l(t),p(t),i(!1),n(!0),b()},w=()=>{const t={analytics_storage:o.analytics?"granted":"denied",ad_storage:o.marketing?"granted":"denied",ad_user_data:o.marketing?"granted":"denied",ad_personalization:o.marketing?"granted":"denied"};l(t),p(t),i(!1),s(!1),n(!0),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"consent_update"})},b=()=>{document.cookie.split(";").forEach(t=>{const r=t.indexOf("="),a=r>-1?t.substr(0,r).trim():t.trim();!a.startsWith("_consent")&&!a.startsWith("userConsent")&&(document.cookie=`${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`,document.cookie=`${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`)})};return e.jsxs(e.Fragment,{children:[x&&e.jsx("div",{className:"cookie-banner",children:e.jsxs("div",{className:"cookie-container",children:[e.jsxs("div",{className:"cookie-text",children:[e.jsx("h3",{children:"🍪 Ta strona używa plików cookies"}),e.jsx("p",{children:"Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony oraz do celów analitycznych i marketingowych. Możesz zarządzać swoimi preferencjami w każdej chwili."})]}),e.jsxs("div",{className:"cookie-buttons",children:[e.jsx("button",{onClick:k,className:"btn-accept",children:"Akceptuj wszystkie"}),e.jsx("button",{onClick:u,className:"btn-reject",children:"Odrzuć wszystkie"}),e.jsx("button",{onClick:()=>s(!0),className:"btn-settings",children:"Ustawienia"})]})]})}),h&&e.jsx("div",{className:"cookie-modal",onClick:t=>{t.target===t.currentTarget&&s(!1)},children:e.jsxs("div",{className:"cookie-modal-content",children:[e.jsxs("div",{className:"cookie-modal-header",children:[e.jsx("h2",{children:"Ustawienia plików cookies"}),e.jsx("p",{children:"Zarządzaj swoimi preferencjami dotyczącymi plików cookies. Możesz włączyć lub wyłączyć poszczególne kategorie."})]}),e.jsxs("div",{className:"cookie-category",children:[e.jsxs("div",{className:"cookie-category-header",children:[e.jsx("h3",{children:"Niezbędne"}),e.jsxs("label",{className:"cookie-switch",children:[e.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),e.jsx("span",{className:"slider"})]})]}),e.jsx("p",{children:"Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony. Nie można ich wyłączyć."})]}),e.jsxs("div",{className:"cookie-category",children:[e.jsxs("div",{className:"cookie-category-header",children:[e.jsx("h3",{children:"Analityczne"}),e.jsxs("label",{className:"cookie-switch",children:[e.jsx("input",{type:"checkbox",checked:o.analytics,onChange:t=>d({...o,analytics:t.target.checked})}),e.jsx("span",{className:"slider"})]})]}),e.jsx("p",{children:"Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony, zbierając anonimowe informacje o ruchu na stronie."})]}),e.jsxs("div",{className:"cookie-category",children:[e.jsxs("div",{className:"cookie-category-header",children:[e.jsx("h3",{children:"Marketingowe"}),e.jsxs("label",{className:"cookie-switch",children:[e.jsx("input",{type:"checkbox",checked:o.marketing,onChange:t=>d({...o,marketing:t.target.checked})}),e.jsx("span",{className:"slider"})]})]}),e.jsx("p",{children:"Używane do wyświetlania spersonalizowanych reklam na podstawie Twoich zainteresowań."})]}),e.jsxs("div",{className:"cookie-modal-footer",children:[e.jsx("a",{href:"/polityka-prywatnosci",className:"cookie-link",children:"Polityka prywatności"}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s(!1),className:"btn-cancel",children:"Anuluj"}),e.jsx("button",{onClick:w,className:"btn-save",children:"Zapisz ustawienia"})]})]})]})}),g&&e.jsx("button",{className:"cookie-floating",onClick:()=>s(!0),"aria-label":"Cookie settings",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 6v6l4 2"})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{z as default};
