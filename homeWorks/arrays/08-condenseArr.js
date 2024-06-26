function condense(arr) {
    
    while (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }
        arr = arr.slice(0, arr.length - 1);
    }
    console.log(arr);

}

condense([2,10,3]);
condense([5,0,4,1,2]);
condense([1]);