// src/components/ui/Lightbox.tsx

import React, { useState, useEffect } from "react";
import type { GalleryImage } from "../../lib/types";

interface LightboxProps {
  images: GalleryImage[];
}

const Lightbox: React.FC<LightboxProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleOpenLightbox = (event: CustomEvent) => {
      setCurrentIndex(event.detail.index);
      setIsOpen(true);
    };

    window.addEventListener(
      "openLightbox",
      handleOpenLightbox as EventListener
    );

    return () => {
      window.removeEventListener(
        "openLightbox",
        handleOpenLightbox as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lightbox" onClick={handleBackgroundClick}>
      <button
        className="lightbox-close"
        onClick={() => setIsOpen(false)}
        aria-label="Zamknij"
      >
        ×
      </button>

      <button
        className="lightbox-prev"
        onClick={goToPrevious}
        aria-label="Poprzednie zdjęcie"
      >
        ‹
      </button>

      <button
        className="lightbox-next"
        onClick={goToNext}
        aria-label="Następne zdjęcie"
      >
        ›
      </button>

      <img
        className="lightbox-content"
        src={images[currentIndex]?.src}
        alt={images[currentIndex]?.alt}
      />

      {images[currentIndex]?.title && (
        <div className="lightbox-caption">{images[currentIndex].title}</div>
      )}

      <style jsx>{`
        .lightbox {
          display: flex;
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          animation: fadeIn 0.3s ease;
          justify-content: center;
          align-items: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }

        .lightbox-close {
          position: absolute;
          top: 30px;
          right: 40px;
          color: white;
          font-size: 3rem;
          font-weight: 300;
          cursor: pointer;
          transition: 0.3s;
          z-index: 10000;
          background: none;
          border: none;
        }

        .lightbox-close:hover {
          transform: scale(1.2);
        }

        .lightbox-prev,
        .lightbox-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-size: 4rem;
          font-weight: 300;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1rem;
          transition: 0.3s;
          z-index: 10000;
        }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          transform: translateY(-50%) scale(1.2);
        }

        .lightbox-prev {
          left: 30px;
        }

        .lightbox-next {
          right: 30px;
        }

        .lightbox-caption {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 1.2rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 0.5rem 1.5rem;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .lightbox-close {
            top: 10px;
            right: 20px;
            font-size: 2.5rem;
          }

          .lightbox-prev,
          .lightbox-next {
            font-size: 3rem;
          }

          .lightbox-prev {
            left: 10px;
          }

          .lightbox-next {
            right: 10px;
          }

          .lightbox-caption {
            font-size: 1rem;
            bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
