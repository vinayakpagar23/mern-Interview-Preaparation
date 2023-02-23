// using lodash we can use deouncing and Throtlling as well 
let button = document.querySelector(".counter");
let counter = document.querySelector(".first-counter");
let debouncer_counter = document.querySelector(".debouncer");

var normal_count=0;
var triggerdCount=0;



const debounceCounter = _.debounce(()=>{
    debouncer_counter.innerHTML = ++triggerdCount; 
},1000);
const increased = ()=>{
    counter.innerHTML =++normal_count;
    debounceCounter();
}
button.addEventListener("click",increased);

