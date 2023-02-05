function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++

    let houseingVulume = width * length * height;

    let command = input[index];
    index++;

    while (command !== 'Done') {
        let boxesCount = Number(command);

        houseingVulume -= boxesCount;

        if (houseingVulume <= 0) {
            console.log(`No more free space! You need ${Math.abs(houseingVulume)} Cubic meters more.`)
            break;
        }

        command = input[index];
        index++
    }

    if (command === 'Done') {
        console.log(`${houseingVulume} Cubic meters left.`)
    }

}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
