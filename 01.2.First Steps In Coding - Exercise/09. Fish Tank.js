function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let total_lt = volume / 1000;
    let acc_lt = total_lt * (percent / 100);
    let result = total_lt - acc_lt;

console.log(result);
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "])
