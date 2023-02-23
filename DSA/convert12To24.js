// convert 12 hours to 24 hours

// 01:02

const convert12T024=(time12hr)=>{

    let [time,modifier]=time12hr.split(" ");

    let [hours,minutes]=time.split(":");

    if(hours=="12") hours=00;
    if(modifier=="PM") hours=parseInt(hours)+12;

    return `${hours}:${minutes}`;
}

console.log(convert12T024("01:34 PM"));