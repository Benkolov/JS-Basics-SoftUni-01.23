function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razr = Number(input[2]);
    let hours_workers = Number(input[3]);

    let price_nylon = (nylon + 2) * 1.5;
    let price_paint = (paint * 1.1) * 14.5;
    let price_razr = razr * 5;
    let sum_materials = price_nylon + price_paint + price_razr + 0.40;

    let price_hours_workers = (sum_materials * 0.30) * hours_workers;

    let total_sum = sum_materials + price_hours_workers;

    console.log(total_sum);

}

repainting(["5 ",
"10 ",
"10 ",
"1 "]

)