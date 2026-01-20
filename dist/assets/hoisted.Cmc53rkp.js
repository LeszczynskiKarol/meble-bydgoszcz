import"./hoisted.CfsCwYBW.js";let s=0;window.scrollGallery=function(e){const n=document.getElementById("galleryTrack");if(!n)return;const t=n.querySelectorAll(".gallery-item");if(t.length===0)return;const a=t[0].offsetWidth+32,o=n.parentElement?.offsetWidth||0,d=Math.floor(o/a),l=Math.max(0,(t.length-d)*a);s+=e*a*Math.max(1,d-1),s>l?s=0:s<0&&(s=l),n.style.transform=`translateX(-${s}px)`};let L;function v(){L=setInterval(()=>{window.scrollGallery(1)},4e3)}const h=document.getElementById("galleryTrack");if(h&&h.querySelectorAll(".gallery-item").length>0){v();const e=document.querySelector(".gallery-carousel");e&&(e.addEventListener("mouseenter",()=>{clearInterval(L)}),e.addEventListener("mouseleave",()=>{v()}))}const S=document.querySelectorAll(".gallery-item");S.forEach((e,n)=>{e.addEventListener("click",()=>{const t=new CustomEvent("openLightbox",{detail:{index:n}});window.dispatchEvent(t)})});let r=[],c=0;const x=3;function m(e){const n=e.text?e.text.slice(0,200):"",t=e.text&&e.text.length>200;return`
      <div class="review-card">
        <div class="review-header">
          ${e.profilePhoto?`<img src="${e.profilePhoto}" alt="${e.author}" class="review-avatar-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="review-avatar" style="display:none;">
              <span>${e.avatar||"U"}</span>
            </div>`:`<div class="review-avatar">
              <span>${e.avatar||"U"}</span>
            </div>`}
          <div class="review-info">
            <h4>${e.author}</h4>
            <div class="review-meta">
              <div class="review-stars" style="display: flex; flex-direction: row; gap: 2px;">
                ${Array(5).fill("").map((a,o)=>`
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="${o<e.rating?"#fbbf24":"#e5e7eb"}" style="display: inline-block;">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                `).join("")}
              </div>
              <span class="review-date">${e.date}</span>
            </div>
          </div>
        </div>
        <p class="review-text" data-full-text="${(e.text||"").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}">
          <span class="text-content">${n}${t?"...":""}</span>
          ${t?' <button class="expand-btn" data-expand style="display: inline; margin-left: 8px;">Rozwiń</button>':""}
        </p>
        ${e.verified?`
          <div class="verified-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#22c55e">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            Zweryfikowana opinia Google
          </div>
        `:""}
      </div>
    `}function w(){document.querySelectorAll("[data-expand]").forEach(e=>{e.hasListener||(e.hasListener=!0,e.addEventListener("click",function(){const n=this.parentElement,t=n.dataset.fullText,a=n.querySelector(".text-content");this.textContent==="Rozwiń"?(a.textContent=t,this.textContent="Zwiń"):(a.textContent=t.slice(0,200)+"...",this.textContent="Rozwiń")}))})}document.addEventListener("DOMContentLoaded",async()=>{const n=document.querySelector(".reviews")?.getAttribute("data-api-endpoint"),t=document.querySelector("[data-load-more]"),a=document.querySelector("[data-reviews-container]"),o=document.querySelector(".reviews-loading"),d=document.querySelector(".reviews-footer");if(!n||!a){o.innerHTML='<p class="error">Błąd konfiguracji API</p>';return}try{const l=await fetch(n);if(!l.ok)throw new Error("API Error");const i=await l.json();r=i.reviews||[],o.style.display="none";const p=document.querySelector("[data-rating]"),u=document.querySelector("[data-total-reviews]"),g=document.querySelector(".rating-progress");if(p&&i.rating){if(p.textContent=i.rating.toFixed(1),g){const f=i.rating/5*565;g.style.strokeDasharray=`${f} 565`}const y=document.querySelector("[data-stars]");y&&(y.innerHTML=Array(5).fill("").map((f,E)=>`
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${E<Math.floor(i.rating)?"#fbbf24":"#e5e7eb"}">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          `).join(""))}if(u&&(u.textContent=i.totalReviews||"0"),r.length>0){const y=r.slice(0,3);a.innerHTML=y.map(f=>m(f)).join(""),a.style.display="grid",d.style.display="flex",c=3,w(),r.length>3&&(t.style.display="inline-flex")}else a.innerHTML='<p class="no-reviews">Brak opinii do wyświetlenia</p>',a.style.display="block"}catch(l){console.error("Error:",l),o.innerHTML='<p class="error">Nie udało się załadować opinii. Spróbuj później.</p>'}t&&t.addEventListener("click",()=>{if(c<r.length){const i=r.slice(c,c+x).map(p=>m(p)).join("");a.insertAdjacentHTML("beforeend",i),c+=x,w(),c>=r.length&&(t.style.display="none")}})});
