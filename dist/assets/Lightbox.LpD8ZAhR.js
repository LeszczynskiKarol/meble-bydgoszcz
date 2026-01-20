import{j as e}from"./jsx-runtime.BjG_zV1W.js";import{r as s}from"./index.CMFzYXQQ.js";const g=({images:o})=>{const[a,r]=s.useState(!1),[n,l]=s.useState(0);s.useEffect(()=>{const t=i=>{l(i.detail.index),r(!0)};return window.addEventListener("openLightbox",t),()=>{window.removeEventListener("openLightbox",t)}},[]),s.useEffect(()=>{const t=i=>{a&&(i.key==="Escape"?r(!1):i.key==="ArrowLeft"?x():i.key==="ArrowRight"&&c())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a,n]);const x=()=>{l(t=>t===0?o.length-1:t-1)},c=()=>{l(t=>t===o.length-1?0:t+1)},h=t=>{t.target===t.currentTarget&&r(!1)};return a?e.jsxs("div",{className:"lightbox",onClick:h,children:[e.jsx("button",{className:"lightbox-close",onClick:()=>r(!1),"aria-label":"Zamknij",children:"×"}),e.jsx("button",{className:"lightbox-prev",onClick:x,"aria-label":"Poprzednie zdjęcie",children:"‹"}),e.jsx("button",{className:"lightbox-next",onClick:c,"aria-label":"Następne zdjęcie",children:"›"}),e.jsx("img",{className:"lightbox-content",src:o[n]?.src,alt:o[n]?.alt}),o[n]?.title&&e.jsx("div",{className:"lightbox-caption",children:o[n].title}),e.jsx("style",{jsx:!0,children:`
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
      `})]}):null};export{g as default};
