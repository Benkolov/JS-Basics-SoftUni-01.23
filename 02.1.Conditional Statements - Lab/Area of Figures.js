function areaOfFigures(input){
    const pi = Math.PI;
let type_of_the_figure = String(input[0]);
let result = 0;
if (type_of_the_figure === "square") {
    let side = parseFloat(input[1]);
    result = side * side;
} else if (type_of_the_figure === "rectangle") {
    let first_side = parseFloat(input[1]);
    let second_side = parseFloat(input[2]);
    result = first_side * second_side;
} else if (type_of_the_figure === "circle") {
    let radius = parseFloat(input[1]);
    result = pi * (radius ** 2);
} else if (type_of_the_figure === "triangle") {
    let side = parseFloat(input[1]);
    let height = parseFloat(input[2]);
    result = side * height / 2;
}
console.log(result.toFixed(3));

}


areaOfFigures(["rectangle",
"7",
"2.5"])
