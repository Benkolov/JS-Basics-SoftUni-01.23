function worldSwimmingRecord(input){
    let recordSec = Number(input[0]);
    let distanceM = Number(input[1]);
    let timeSecFor1M = Number(input[2]);

    let totalTime = distanceM * timeSecFor1M + Math.floor(distanceM / 15) * 12.5;

if (totalTime < recordSec) {
  console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
} else {
  let diff = totalTime - recordSec;
  console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}


} 

worldSwimmingRecord()