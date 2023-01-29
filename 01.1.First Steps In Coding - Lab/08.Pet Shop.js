function petShop(input){
    let dogs_food_quantity = Number(input[0]);
    let cats_food_quantity = Number(input[1]);

    let total_sum = dogs_food_quantity * 2.50 + cats_food_quantity * 4;
    
    console.log(`${total_sum} lv.`);

}

petShop()