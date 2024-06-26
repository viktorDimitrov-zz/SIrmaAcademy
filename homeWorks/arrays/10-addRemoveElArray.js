function addRemEl(arr) {
    let resultArr = [];
    let counter=1;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            resultArr.push(counter++);
        } else {
            resultArr.pop();
        }
    }
    if(resultArr.length>0){
        console.log(resultArr.join(' '));
    }else{
        console.log('Empty');
    }

    
}

addRemEl(['add', 'add', 'add', 'add']);
addRemEl(['add', 'add', 'remove', 'add', 'add']);
addRemEl(['remove', 'remove', 'remove']);