import{j as t}from"./jsx-runtime.BjG_zV1W.js";import{r as s}from"./index.CMFzYXQQ.js";const X=({images:n,autoPlay:c=!0,interval:h=5e3,pauseOnHover:_=!0,showDots:p=!0,showArrows:w=!0,loop:a=!0,className:v="",height:k="500px"})=>{const[o,f]=s.useState(0),[b,g]=s.useState(c),d=s.useRef(null),j=s.useRef(null),l=s.useCallback(e=>{f(a?e:Math.max(0,Math.min(e,n.length-1)))},[n.length,a]),u=s.useCallback(()=>{l(o===0&&a?n.length-1:o-1)},[o,n.length,a,l]),i=s.useCallback(()=>{o===n.length-1&&a?l(0):l(o+1)},[o,n.length,a,l]);s.useEffect(()=>(b&&c&&(d.current=setInterval(i,h)),()=>{d.current&&clearInterval(d.current)}),[b,c,h,i]),s.useEffect(()=>{const e=r=>{r.key==="ArrowLeft"?u():r.key==="ArrowRight"&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[u,i]);const[x,y]=s.useState(0),[m,T]=s.useState(0),E=e=>{y(e.targetTouches[0].clientX)},N=e=>{T(e.targetTouches[0].clientX)},S=()=>{if(!x||!m)return;const e=x-m,r=e>50,R=e<-50;r&&i(),R&&u()},C=()=>{_&&g(!1)},M=()=>{_&&c&&g(!0)};return t.jsxs("div",{className:`carousel ${v}`,onMouseEnter:C,onMouseLeave:M,style:{height:k},children:[t.jsx("div",{ref:j,className:"carousel__track",onTouchStart:E,onTouchMove:N,onTouchEnd:S,style:{transform:`translateX(-${o*100}%)`},children:n.map((e,r)=>t.jsx("div",{className:"carousel__slide",children:t.jsx("img",{src:e.src,alt:e.alt,title:e.title,loading:r===0?"eager":"lazy",className:"carousel__image"})},r))}),w&&t.jsxs("div",{className:"carousel__controls",children:[t.jsx("button",{onClick:u,className:"carousel__btn carousel__btn--prev","aria-label":"Previous slide",disabled:!a&&o===0,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"15 18 9 12 15 6"})})}),t.jsx("button",{onClick:i,className:"carousel__btn carousel__btn--next","aria-label":"Next slide",disabled:!a&&o===n.length-1,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),p&&t.jsx("div",{className:"carousel__dots",children:n.map((e,r)=>t.jsx("button",{onClick:()=>l(r),className:`carousel__dot ${r===o?"carousel__dot--active":""}`,"aria-label":`Go to slide ${r+1}`},r))}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};export{X as default};
