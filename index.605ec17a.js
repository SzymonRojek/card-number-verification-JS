const e={message:"Luhn's algorithm does not point to the truth!"};function r(r){return[...r].map((e=>Number(e))).reverse().map(((e,r)=>r%2==1?2*e:e)).reduce(((e,r)=>e+(r>9?String(r).split("").map((e=>Number(e))).reduce(((e,r)=>e+r),0):r)),0)%10==0||e}const t={message:"Please, type only numbers!"};function n(e){return/^\d+$/.test(e)||t}const s={message:"Please write a proper length of the numbers!"};function c(e,r){return r.length&&r.find((({length:r})=>r.includes(e.length)))||s}var a=[{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",startingNumbers:[51,52,53,54,55],length:[16],atr:"card__logo--mastercard"},{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",startingNumbers:[4],length:[13,16],atr:"card__logo--visa"},{imgUrl:"https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2020-11/americanexpress.jpg?itok=i_4MMKM0",startingNumbers:[34,37],length:[15],atr:"card__logo--americanExpress"}];const o=document.querySelector(".js-cards__collection"),i=document.querySelector(".js-card__header-information"),d=document.querySelector(".js-card__logo"),u=document.querySelector(".js-numberInput"),l=document.querySelector(".js-form__list--errors"),m=document.querySelector(".js-card__number"),g=[{message:"Card Number is required!"}];function p(e){e.preventDefault(),u.focus(),u.value.trim();const t=function(e,r){const t={message:"The beginning of the bank card number is incorrect!"},n=r&&r.filter((({startingNumbers:r})=>{const t=r.find((e=>e>>>0==e%10))?1:2,n=(s=e,c=t,Number([...s].slice(0,c).join("")));var s,c;return r.includes(n)}));return n.length?n:t}(u.value,a);!function(e,r){!function(e,r){const t=0,n=e.map((({message:e})=>`\n          <li class="form__list-error">\n            ${e}\n          </li>\n        `)).join("");l.innerHTML=n,e.length?(d.removeAttribute("src"),m.classList.remove("card__number--correct"),i.textContent="Card unknown"):(d.src=r[t].imgUrl,d.classList.add(r[t].atr),m.classList.add("card__number--correct"),i.textContent="Card")}(e,r)}(function(e,t){!function(e){if("string"!=typeof e)throw new Error("Given parameter is not a string!")}(e);const s=[n(e),c(e,t),r(e),t];return e?s.filter((({message:e})=>e)):g}(u.value,t),t)}a.forEach((e=>{const r=new Image;r.src=e.imgUrl,r.classList.add(e.atr),o.append(r)})),u.addEventListener("input",(({target:e})=>{m.textContent=""!==e?function(e){const r="0000000000000000";let t="";for(let n=0;n<r.length;n++){const s=r[n];t+=e[n]||s}const n=t.slice(0,-(r.length-e.length));switch(e.length){case 1:return n.replace(/(\d{1})/,"$1");case 2:return n.replace(/(\d{2})/,"$1");case 3:return n.replace(/(\d{3})/,"$1");case 4:return n.replace(/(\d{4})/,"$1");case 5:return n.replace(/(\d{4})(\d{1})/,"$1 $2");case 6:return n.replace(/(\d{4})(\d{2})/,"$1 $2");case 7:return n.replace(/(\d{4})(\d{3})/,"$1 $2");case 8:return n.replace(/(\d{4})(\d{4})/,"$1 $2");case 9:return n.replace(/(\d{4})(\d{4})(\d{1})/,"$1 $2 $3");case 10:return n.replace(/(\d{4})(\d{4})(\d{2})/,"$1 $2 $3");case 11:return n.replace(/(\d{4})(\d{4})(\d{3})/,"$1 $2 $3");case 12:return n.replace(/(\d{4})(\d{4})(\d{4})/,"$1 $2 $3");case 13:return n.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/,"$1 $2 $3 $4");case 14:return n.replace(/(\d{4})(\d{4})(\d{4})(\d{2})/,"$1 $2 $3 $4");case 15:return n.replace(/(\d{4})(\d{4})(\d{4})(\d{3})/,"$1 $2 $3 $4");default:return t.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,"$1 $2 $3 $4")}}(u.value):"0000 0000 0000 0000",function(){d.hasAttribute("src")&&d.removeAttribute("src");m.classList.contains("card__number--correct")&&m.classList.remove("card__number--correct");a.forEach((({atr:e})=>{d.classList.contains(e)&&d.classList.remove(e)}))}()})),document.querySelector(".js-form").addEventListener("submit",p);
//# sourceMappingURL=index.605ec17a.js.map
