const a=()=>{const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e=localStorage.getItem("theme");e?document.documentElement.classList.toggle("dark",e==="dark"):document.documentElement.classList.toggle("dark",t)};a();