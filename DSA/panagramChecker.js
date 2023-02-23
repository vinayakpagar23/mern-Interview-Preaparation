// String pangram checker
// Pangram means all a to z alphabet need to present in string
let str = "The quick brown for jumps over a lazy dogx";

function checkPan(str){
    let arr = new Array(26).fill(false);
  let index;
    for(var i =0;i<str.length;i++){
        if(str[i]>="A" && str[i]<="Z"){
          index = str.charCodeAt(i) - "A".charCodeAt(0);
          console.log(index);
          arr[index]=true;
        }
        else if(str[i]>="a" && str[i]<="z"){
            index = str.charCodeAt(i) - "a".charCodeAt(0);
            arr[index]=true;
        }
        else continue;
    }
    console.log(arr)
    for(var i =0;i<arr.length;i++){
        if(arr[i]!==true){
            return false;
        }
    }
    
    return true;
}

console.log(checkPan(str));