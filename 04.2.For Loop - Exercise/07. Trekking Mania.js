function trekkingMania(input) {
    let count_groups = Number(input[0]);
    let musala_sum = 0;
    let montblanc_sum = 0;
    let kilimanjaro_sum = 0;
    let k2_sum = 0;
    let everest_sum = 0;
    let total_sum = 0;

for (let i = 1; i <= count_groups; i++) {
    let people = Number(input[i]);
    total_sum = total_sum + people;

    if (people <= 5) {
        musala_sum = musala_sum + people;
    } else if (people <= 12) {
        montblanc_sum = montblanc_sum + people;
    } else if (people <= 25) {
        kilimanjaro_sum = kilimanjaro_sum + people;
    } else if (people <= 40) {
        k2_sum = k2_sum + people;
    } else {
        everest_sum = everest_sum + people;
    }
}

let percent_musala = (musala_sum / total_sum) * 100;
console.log(`${percent_musala.toFixed(2)}%`);
let percent_montblanc = (montblanc_sum / total_sum) * 100;
console.log(`${percent_montblanc.toFixed(2)}%`);
let percent_kilimanjaro = (kilimanjaro_sum / total_sum) * 100;
console.log(`${percent_kilimanjaro.toFixed(2)}%`);
let percent_k2 = (k2_sum / total_sum) * 100;
console.log(`${percent_k2.toFixed(2)}%`);
let percent_everest = (everest_sum / total_sum) * 100;
console.log(`${percent_everest.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
