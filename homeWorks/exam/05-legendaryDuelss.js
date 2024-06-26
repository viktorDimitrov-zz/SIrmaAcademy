function isLegendaryFight(sequence) {

    let result;
  const matchingPairs = {
    '(': ')',
    '{': '}'
  };

  let stack = [];
  let prevChar = null;
  let isFirst=false;

  for (let char of sequence) {
    if (matchingPairs[char]) {
      // It's an opening strike, push it onto the stack
      stack.push(char);
    } else if (char === '!') {
        if(isFirst===false){
            isFirst=true;
            continue;
        }
      else if (prevChar === '!') {
        prevChar = null; 
        continue;
      } else {
        return console.log('Not Legendary');
      }
    } else {
      if (stack.length === 0) {
        return console.log('Not Legendary');
      }

      let lastOpening = stack.pop();
      if (matchingPairs[lastOpening] !== char) {
        return console.log('Not Legendary');
      }
    }
    prevChar = char;
  }

 
  if(stack.length === 0){
    return console.log('Legendary');
  }else{
    return console.log('Not Legendary');
  }
}



