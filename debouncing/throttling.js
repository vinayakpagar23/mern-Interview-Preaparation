// using lodash we can use Throtlling as well 
let button = document.querySelector(".counter");
let counter = document.querySelector(".first-counter");
let debouncer_counter = document.querySelector(".debouncer");

var normal_count=0;
var triggerdCount=0;


// debouncer function 
const debounceCounter = _.throttle(()=>{
    debouncer_counter.innerHTML = ++triggerdCount; 
},1000);




const increased = ()=>{
    counter.innerHTML =++normal_count;
    debounceCounter();
}
button.addEventListener("click",increased);

