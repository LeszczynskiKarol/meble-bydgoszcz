// src/components/ui/Carousel.tsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import type { CarouselOptions } from "../../lib/types";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

interface CarouselProps extends CarouselOptions {
  images: CarouselImage[];
  className?: string;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
  loop = true,
  className = "",
  height = "500px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (loop) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
      }
    },
    [images.length, loop]
  );

  const goToPrevious = useCallback(() => {
    if (currentIndex === 0 && loop) {
      goToSlide(images.length - 1);
    } else {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, images.length, loop, goToSlide]);

  const goToNext = useCallback(() => {
    if (currentIndex === images.length - 1 && loop) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, images.length, loop, goToSlide]);

  // Auto-play logic
  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(goToNext, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, autoPlay, interval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoPlay) {
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`carousel ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height }}
    >
      <div
        ref={trackRef}
        className="carousel__track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel__slide">
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="carousel__image"
            />
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="carousel__controls">
          <button
            onClick={goToPrevious}
            className="carousel__btn carousel__btn--prev"
            aria-label="Previous slide"
            disabled={!loop && currentIndex === 0}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="carousel__btn carousel__btn--next"
            aria-label="Next slide"
            disabled={!loop && currentIndex === images.length - 1}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      {showDots && (
        <div className="carousel__dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel__dot ${
                index === currentIndex ? "carousel__dot--active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 1rem;
          background: #f5f5f5;
        }

        .carousel__track {
          display: flex;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel__slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        .carousel__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel__controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 1.25rem;
          pointer-events: none;
        }

        .carousel__btn {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          color: #1a1a1a;
        }

        .carousel__btn:hover:not(:disabled) {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .carousel__btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .carousel__dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.625rem;
        }

        .carousel__dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel__dot--active {
          background: white;
          transform: scale(1.2);
        }

        .carousel__dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .carousel__btn {
            width: 2.5rem;
            height: 2.5rem;
          }

          .carousel__controls {
            padding: 0 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
