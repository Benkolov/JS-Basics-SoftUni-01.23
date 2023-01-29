function projectsCreation(input){
    let name = String(input[0]);
    let number_projects = Number(input[1]);
    let time_projects = number_projects * 3;
    
    console.log(`The architect ${name} will need ${time_projects} hours to complete ${number_projects} project/s.`);

}

projectsCreation()