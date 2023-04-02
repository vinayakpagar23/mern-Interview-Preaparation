
// function toggler(...args) {
//     var i =0;
//     return function(){
//         console.log(args[i]);
//         i = (i+1) %args.length;
//     }
// }
// const toggle = toggler(1,2,3)
// toggle() //1
// toggle() //2
// toggle() //3



function toggeler(...args){
     var i =0;
     return function(){
        console.log(args[i]);
        i = (i+1)%args.length;
     }
}

const tick = toggeler(1,2,3);

tick();
tick();
tick();
tick();




// // print without let using closure
// for(var i =0;i<5;i++){
//     function inner(i){
//         setTimeout(()=>{
//             console.log(i);
//         },i*2000)
//     }
//     inner(i);
// }



// function upper(){
//     var i =0;
   
        
//         return function(str){
//             if(i==0){
//                 console.log(str);
//             }
//             i++;
//         }
    

// }

// let ans = upper();

// ans("vinauak");
// ans("vinauak");
// ans("vinauak");
// ans("vinauak");
// ans("vinauak");


function a(i){
   return function(b){
      if(b) return a(i+b);
      return i;
   }
}

res =a(3)(2)(4)();
console.log(res)



