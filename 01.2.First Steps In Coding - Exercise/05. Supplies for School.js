function suppliesForSchool(input){
    let numberChemical = Number(input[0]);
    let numberTag = Number(input[1]);
    let litersChalkboard = Number(input[2]);
    let percentDiscount = Number(input[3]);
    let sum = numberChemical * 5.80 + numberTag * 7.20 + litersChalkboard * 1.20
    let totalSum = sum - (sum * (percentDiscount / 100))

    console.log(totalSum)
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])
