import{r}from"./index-D0o6aRj1.js";function u(e,o,s){r.useEffect(()=>{const n=new MutationObserver(t=>{t.forEach(o)});if(e!==null)if(typeof e=="string"){const t=document.querySelector(e);t&&n.observe(t,s)}else n.observe(e,s);return()=>{n.disconnect()}},[e,o,s])}function i(e,o,s){r.useEffect(()=>{const n=new IntersectionObserver(t=>{t.forEach(o)},s);if(e!==null)if(typeof e=="string"){const t=document.querySelector(e);t&&n.observe(t)}else n.observe(e);return()=>{n.disconnect()}},[e,o,s])}export{u as a,i as u};
