function sayMeTheDay(number){
    let dayOfWeek;

    switch (number) {
        case 1:
            dayOfWeek="Monday";
            break;
        case 2:
            dayOfWeek="Tuesday";
            break;
        case 3:
            dayOfWeek="Wednesday";
            break; 
        case 4:
            dayOfWeek="Thursday";
            break;  
        case 5:
            dayOfWeek="Friday";
            break; 
        case 6:
            dayOfWeek="Saturday";
            break;
        case 7:
            dayOfWeek="Sunday";
            break;
        default: dayOfWeek="Error";
            break;

    }
    console.log(dayOfWeek);
}

sayMeTheDay(1);
sayMeTheDay(2);
sayMeTheDay(3);
sayMeTheDay(4);
sayMeTheDay(5);
sayMeTheDay(6);
sayMeTheDay(7);
sayMeTheDay(8);
sayMeTheDay(9);