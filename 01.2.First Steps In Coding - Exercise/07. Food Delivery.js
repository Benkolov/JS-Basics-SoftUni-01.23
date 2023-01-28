function foodDelivery(input){
    let chicken_menu_count = Number(input[0])
    let fish_menu_count = Number(input[1])
    let veg_menu_count = Number(input[2])

    let price_chicken = chicken_menu_count * 10.35;
    let price_fish = fish_menu_count * 12.4;
    let price_veg = veg_menu_count * 8.15;

    let all_menu_price = price_chicken + price_fish + price_veg;

    let dessert = all_menu_price * 0.20;
    let total_sum = all_menu_price + dessert + 2.5;

console.log(total_sum);

}

foodDelivery(["9 ",
"2 ",
"6 "]
)