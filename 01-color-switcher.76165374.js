let e=null;const t=document.querySelectorAll("button"),l=document.querySelector("body");t[0].addEventListener("click",(()=>{t[0].disabled=!0,e=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t[1].addEventListener("click",(()=>{clearInterval(e),t[0].disabled=!1}));
//# sourceMappingURL=01-color-switcher.76165374.js.map
