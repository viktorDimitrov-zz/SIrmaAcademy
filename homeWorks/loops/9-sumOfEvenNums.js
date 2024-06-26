function sumEvenNums(num) {
    let sum=0;
    let index=1;
   while (num>  0) {
        if(index%2==0){
            sum+=index;  
            num--;  
        }
       
        index++;
   }
    console.log(sum);
}

sumEvenNums(3);
sumEvenNums(5);
sumEvenNums(1);
sumEvenNums(0);
sumEvenNums(10);