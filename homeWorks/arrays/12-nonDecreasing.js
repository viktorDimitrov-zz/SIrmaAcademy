function nonDecreasingSequence(arr) {
    let result=[];
    let max=arr[0];
    for (const i of arr) {
        if(i>=max){
            result.push(i);
            max=i;
        }
    }

    console.log(result.join(' '));
}

nonDecreasingSequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSequence([ 1, 2, 3, 4]);
nonDecreasingSequence([ 20, 3, 2, 15, 6, 1]);