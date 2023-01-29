function toyShop(input){
    let tripPrice = Number(input[0]);
let puzzleCount = Number(input[1]);
let dollsCount = Number(input[2]);
let teddyCount = Number(input[3]);
let minionsCount = Number(input[4]);
let trucksCount = Number(input[5]);

let totalSum = (puzzleCount * 2.6) + (dollsCount * 3) + (teddyCount * 4.10) + (minionsCount *8.20) + (trucksCount *2);

let totalCount = puzzleCount + dollsCount + teddyCount + minionsCount + trucksCount;
if (totalCount >= 50) {
totalSum = totalSum * 0.75;
}

totalSum = totalSum * 0.90;

let diff = Math.abs(totalSum - tripPrice);
if (totalSum >= tripPrice) {
console.log(`Yes! ${diff.toFixed(2)} lv left.`);
} else {
console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}
}
toyShop()