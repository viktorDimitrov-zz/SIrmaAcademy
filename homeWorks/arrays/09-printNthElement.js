function collectNthElement(arr, nth) {
    let result = [];
    let lastElement = nth * Math.floor(arr.length / nth);
    for (let i = 0; i <= lastElement; i += nth) {
        result[i] = arr[i];

    }

    console.log(result.join(' '));
}

collectNthElement(['5', '15', '31', '14', '20'], 2);
collectNthElement(['dsa', 'asd', 'demo', 'test'], 2);
collectNthElement(['1', '2', '3', '4', '5'], 6);