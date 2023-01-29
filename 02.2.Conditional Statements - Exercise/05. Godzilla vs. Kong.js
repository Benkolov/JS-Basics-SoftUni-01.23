function godzillaVsCong(input){
    let budgetMovie = Number(input[0]);
let numberExtras = Number(input[1]);
let priceClothingOne = Number(input[2]);

let decorPrice = budgetMovie * 0.1;
let allClothesPrice = numberExtras * priceClothingOne;

if (numberExtras > 150) {
allClothesPrice = allClothesPrice * 0.9;
}

let totalExpenses = decorPrice + allClothesPrice;

let diff = Math.abs(totalExpenses - budgetMovie);
if (budgetMovie >= totalExpenses) {
console.log("Action!");
console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
} else {
console.log("Not enough money!");
console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
}
}

godzillaVsCong