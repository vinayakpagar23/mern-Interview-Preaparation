// using lodash we can use Throtlling as well 
let button = document.querySelector(".counter");
let counter = document.querySelector(".first-counter");
let debouncer_counter = document.querySelector(".debouncer");

var normal_count=0;
var triggerdCount=0;

const myThrottle=(cb,d)=>{
 let last =0;

 return (...args)=>{
    let now =new Date().getTime();
    if(now - last <d) return;
    last =now;

    return cb(...args)
 }

}
// throttle function 
const debounceCounter = myThrottle(()=>{
    debouncer_counter.innerHTML = ++triggerdCount; 
},1000);




const increased = ()=>{
    counter.innerHTML =++normal_count;
    debounceCounter();
}
button.addEventListener("click",increased);

