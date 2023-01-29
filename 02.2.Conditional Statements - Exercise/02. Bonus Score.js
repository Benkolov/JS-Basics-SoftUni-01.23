function bonusScore(input){
    let point = Number(input[0]);
    let bonus_point = 0;

if (point <= 100) {
    bonus_point = 5;
} else if (point < 1000) {
    bonus_point = point * 0.20;
} else {
    bonus_point = point * 0.10;
}

if (point % 2 === 0) {
    bonus_point += 1;
} else if (point % 10 === 5) {
    bonus_point += 2;
}

console.log(bonus_point);
console.log(bonus_point + point);


}

bonusScore()