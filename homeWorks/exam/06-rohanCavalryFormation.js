function solve(arr, comandsArr) {

    for (const c of comandsArr) {
        let text = c.split(' ');
        let command = text[0];

        switch (command) {
            case 'destroy':
                index = c.split(' ')[1];
                removeElementAtIndex(arr, index);
                console.log(arr);
                break;
            case 'swap':
                [i1, i2] = [text[1], text[2]];
                swapElements(arr, i1, i2);
                console.log(arr);
                break;
            case 'add':
                let el= text[1];
                arr.push(el);
                console.log(arr);
                break;
            case 'center':
                console.log(displayCenterElements(arr));
                break;
            default:
                break;
        }
    }
}

function removeElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    }
    return array;
}

function displayCenterElements(array) {
    const length = array.length;
    if (length === 0) {
      return [];
    }

    const midIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return [array[midIndex - 1], array[midIndex]];
    } else {
      return [array[midIndex]];
    }
  }

function swapElements(array, index1, index2) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    return array;
}

function displayCenterElements(array) {
    const length = array.length;
    if (length === 0) {
      return [];
    }
    const midIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return [array[midIndex - 1], array[midIndex]];
    } else {
      return [array[midIndex]];
    }
  }
  
