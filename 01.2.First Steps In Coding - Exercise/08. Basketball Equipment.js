function basketballEquipment(input){
    let year_tax = Number(input[0]);

    let price_kecove = year_tax * 0.60;
    let price_ekip = price_kecove * 0.80;
    let price_topka = price_ekip / 4;
    let price_aksesoar = price_topka / 5;

    let total_sum = year_tax + price_kecove + price_ekip + price_topka + price_aksesoar;

console.log(total_sum);

}
basketballEquipment(["550"])