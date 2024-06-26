function rotateArrSlice(arr, rotation) {

    rotation = rotation % arr.length;

    const part1 = arr.slice(-rotation);

    const part2 = arr.slice(0, arr.length - rotation);

    let result = part1.concat(part2);
    console.log(result.join(' '));

}

function rotateArrLoops(arr,rotation) {
    rotation = rotation % arr.length;

    for (let i = 0; i < rotation; i++) {
       let currentEl=arr.pop();
        arr.unshift(currentEl);
    }

    console.log(arr.join(' '));
}

rotateArrSlice(['1', '2', '3', '4'], 2);
rotateArrLoops(['1', '2', '3', '4'], 2);
rotateArrSlice(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
rotateArrLoops(['Banana', 'Orange', 'Coconut', 'Apple'], 15);