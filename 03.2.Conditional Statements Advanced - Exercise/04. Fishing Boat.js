function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let countFishman = Number(input[2]);

    let shipCharter = 0

    switch(season){
        case "Spring":
            shipCharter = 3000;
            break;
        case "Summer":
            shipCharter = 4200;
            break;
        case "Autumn":
            shipCharter = 4200;
            break;
        case "Winter":
            shipCharter = 2600;
            break;
    }

    if (countFishman <= 6){
        shipCharter *= 0.9;
    }else if (countFishman <= 11){
        shipCharter *= 0.85;
    }else {
        shipCharter *= 0.75;
    }

    if ( season !== "Autumn" && countFishman % 2 === 0){
        shipCharter *= 0.95
    }

    if (budget >= shipCharter){
        let moneyLeft = budget - shipCharter;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = shipCharter - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }

}

fishingBoat(["2000",
"Winter",
"14"])







