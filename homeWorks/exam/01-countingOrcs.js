function countOrcs(n, m, h) {
    let sum = 0;
    let current = n;
    for (let i = 1; i <= h; i++) {
       
        sum += current;
        current +=m;
    }

    console.log(sum);
    return sum
}

//countOrcs(5, 2, 3);
//countOrcs(7, 1, 2);
//countOrcs(10, -1, 1);
//countOrcs(8, -2, 3);    