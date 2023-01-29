function shopping(input) {
    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let videoSum = videoCount * 250;
    let cpuSum = (videoSum * 0.35) * cpuCount;
    let ramSum = (videoSum * 0.10) * ramCount;
    
    let totalSum = videoSum + cpuSum + ramSum;
    if (videoCount > cpuCount) {
    totalSum = totalSum * 0.85;
    }
    
    const diff = Math.abs(totalSum - budget);
    if (budget >= totalSum) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shopping()