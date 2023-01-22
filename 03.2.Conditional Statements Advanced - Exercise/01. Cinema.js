function cinema(input){
    let screening_type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    let cinema_capacity = rows * columns;

    if (screening_type === "Premiere") {
    income = cinema_capacity * 12;
    } else if (screening_type === "Normal") {
    income = cinema_capacity * 7.5;
    } else if (screening_type === "Discount") {
    income = cinema_capacity * 5.00;
    }
console.log(income.toFixed(2) + " leva");

}

cinema(["Normal",
"21",
"13"])

