document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================================
   VIDEO SETTINGS
   Add future videos ONLY in these arrays.
   A video with no URL is not displayed.
   ========================================================== */

const marriageVideos=[
 {title:"Marriage AI Video — 01",url:"https://res.cloudinary.com/p4ylzyiy/video/upload/v1789163623/WhatsApp_Video_2026-09-12_at_2.00.25_AM.mp4"},
 {title:"Marriage AI Video — 02",url:"https://res.cloudinary.com/p4ylzyiy/video/upload/v1789163621/WhatsApp_Video_2026-09-12_at_2.00.30_AM.mp4"}
];

const normalVideos=[
 // Add your 3–4 Normal AI videos here:
 // {title:"Normal AI Video — 01",url:"YOUR_CLOUDINARY_URL"},
 // {title:"Normal AI Video — 02",url:"YOUR_CLOUDINARY_URL"},
 // {title:"Normal AI Video — 03",url:"YOUR_CLOUDINARY_URL"},
 // {title:"Normal AI Video — 04",url:"YOUR_CLOUDINARY_URL"}
];

function card(v,i){
 if(!v.url)return "";
 return `<article class="video-card reveal"><div class="video-frame"><video controls controlsList="nodownload noplaybackrate" disablePictureInPicture playsinline preload="metadata" oncontextmenu="return false;" aria-label="${v.title}"><source src="${v.url}" type="video/mp4">Your browser does not support the video tag.</video></div><div class="video-info"><span>${String(i+1).padStart(2,"0")}</span><h4>${v.title}</h4></div></article>`;
}

document.getElementById("marriage-video-grid").innerHTML=marriageVideos.map(card).join("");
document.getElementById("normal-video-grid").innerHTML=normalVideos.map(card).join("");
document.getElementById("normal-empty-note").style.display=normalVideos.some(v=>v.url)?"none":"block";

const videos=document.querySelectorAll("video");
videos.forEach(v=>{
 v.addEventListener("play",()=>videos.forEach(o=>{if(o!==v)o.pause()}));
 v.addEventListener("contextmenu",e=>e.preventDefault());
});

const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));

const items=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.1});
 items.forEach(i=>obs.observe(i));
}else items.forEach(i=>i.classList.add("visible"));

document.getElementById("year").textContent=new Date().getFullYear();
});
