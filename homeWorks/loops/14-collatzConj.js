function collatzPrint(num) {
    let result = [num];
    let index = 0;
    let current = num;
    while (current != 1) {
        if (current % 2 == 0) {
            current /= 2;
        } else if (current % 2 != 0) {
            current = current * 3 + 1;
        }
        index++;
        result[index] = current;
    }
    return result;
}

collatzPrint(6);
collatzPrint(12);
collatzPrint(9);
collatzPrint(200);
collatzPrint(15);