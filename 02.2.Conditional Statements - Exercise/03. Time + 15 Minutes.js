function timePlus15Minutes(input){
    let hours = Number(input[0]);
let minutes = Number(input[1]);

minutes = minutes + 15;

if (minutes > 59) {
    hours = hours + 1;
    minutes = minutes - 60;
}

if (hours > 23) {
    hours = 0;
}

if (minutes > 9) {
    console.log(`${hours}:${minutes}`);
} else {
    console.log(`${hours}:0${minutes}`);
}

}

timePlus15Minutes()