function lunchBreak(input) {
    let name_series = String(input[0]);
    let duration_series = Number(input[1]);
    let duration_break = Number(input[2]);
    
    let time_breakfast = duration_break / 8;
    let time_rest = duration_break / 4;
    let time_to_watch = duration_break - (time_breakfast + time_rest);
    let diff = Math.abs(time_to_watch - duration_series);
    let rounded = Math.ceil(diff);
    if (time_to_watch >= duration_series) {
    console.log(`You have enough time to watch ${name_series} and left with ${rounded} minutes free time.`);
    } else {
    console.log(`You don't have enough time to watch ${name_series}, you need ${rounded} more minutes.`);
    }
}

lunchBreak()