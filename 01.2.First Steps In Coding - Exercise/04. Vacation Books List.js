function vacationBooks(input) {

    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let result = (pagesInBook / pagesPerHour) / days;

    console.log(result);

}

vacationBooks()