function oscars(input) {
    let actor_name = input[0];
    let academy_point = Number(input[1]);
    let the_assessors = Number(input[2]);
    
    let total_points = academy_point;
    
    for (let i = 1; i <= the_assessors; i++) {
      let name = input[1 + i * 2];
      let current_points = Number(input[2 + i * 2]);
    
      let points = (name.length * current_points) / 2;
      total_points = total_points + points;
    
      if (total_points >= 1250.5) {
        break;
      }
    }
    
    if (total_points >= 1250.5) {
      console.log(
        `Congratulations, ${actor_name} got a nominee for leading role with ${total_points.toFixed(1)}!`
      );
    } else {
      let diff = 1250.5 - total_points;
      console.log(`Sorry, ${actor_name} you need ${diff.toFixed(1)} more!`);
    }
    
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

