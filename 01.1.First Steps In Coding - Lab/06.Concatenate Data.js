function concatenateData(input){
    let name = String(input[0]);
    let last_name = String(input[1]);
    let age = Number(input[2]);
    let city = String(input[3]);
    
    console.log(`You are ${name} ${last_name}, a ${age}-years old person from ${city}.`);

}

concatenateData()