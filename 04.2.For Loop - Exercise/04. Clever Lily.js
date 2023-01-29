function cleaverLily(input) {
    let age = Number(input[0])
    let washingmachinePrice = Number(input[1])
    let pricePerToy = Number(input[2])

    let totalMoneyWon = 0;
    let evenBirthdayMoneyWon = 10;

    for (let i = 1; i <= age; i++){
        if(i % 2 === 0){
            totalMoneyWon += evenBirthdayMoneyWon;
            totalMoneyWon -= 1;
            evenBirthdayMoneyWon += 10;
        } else {
            totalMoneyWon += pricePerToy;
        }
    }
    if (totalMoneyWon >= washingmachinePrice){
        let moneyLeft = totalMoneyWon - washingmachinePrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = washingmachinePrice - totalMoneyWon
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}

cleaverLily(["10",
"170.00",
"6"])
