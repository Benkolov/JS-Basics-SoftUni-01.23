function salary(input){
    let tab_pcs = Number(input[0]);
    let salary = Number(input[1]);
    
    let copy_salary = salary;
    
    for (let i = 1; i <= tab_pcs; i++) {
        
        let current_tab = input[i+1];
    
    
      if (current_tab === "Facebook") {
        copy_salary = copy_salary - 150;
      } else if (current_tab === "Instagram") {
        copy_salary = copy_salary - 100;
      } else if (current_tab === "Reddit") {
        copy_salary = copy_salary - 50;
      }
    
      if (copy_salary <= 0) {
        break;
      }
    }
    
    if (copy_salary <= 0) {
      console.log("You have lost your salary.");
    } else {
      console.log(copy_salary);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

