

/*---------OR OPEARTOR------------------------------------------------------------------------ */
//  this are the falsy values in javascipt
 // undefined , null , NaN , 0 , "" (empty string)
// let a =undefined || 2;  // 2
// a =null || 2;  // 2
// a =NaN || 2;  // 2
// a =0 || 2;  // 2
// a ="" || 7;  // 7
/*---------------------------------------------------------------------------------*/

// let a =undefined ?? 2;console.log(a)  // 2
// a =null ?? 2; console.log(a) // 2
// a =NaN ?? 2; console.log(a)  // NAN
// a =0 ?? 2; console.log(a)  // 0
// a ="" ?? 7; console.log(a) // ""

/*---------------------------------------------------------------------------------*/

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }
// output= 0 1 2 3 4


/*---------------------------------------------------------------------------------*/

// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }
// output=  5 5 5 5 5


for(var i=0;i<5;i++){
    function inner(i){
        setTimeout(()=>{
            console.log(i);
        })
    };
    inner(i); 
}

/*---------------------------------------------------------------------------------*/

// "use strict"
// var a=2;
// console.log(a);
