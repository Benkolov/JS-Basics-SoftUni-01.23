function weekendOrWorkingDay(input) {
    let dey = String(input[0]);
if (dey === "Monday" || dey === "Tuesday" || dey === "Wednesday" || dey === "Thursday" || dey === "Friday") {
console.log("Working day");
} else if (dey === "Saturday" || dey === "Sunday") {
console.log("Weekend");
} else {
console.log("Error");
}
}

weekendOrWorkingDay(["Monday"])