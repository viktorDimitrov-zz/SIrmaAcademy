function isExellent(grade){

    if(grade>=5.5)
    {
        console.log("Exellent!");
    }
}

isExellent(6);

//3333333333

function greater(num1,num2){
    if(num1>num2){
        console.log(num1);
    } else if(num2>num1){
        console.log(num2)
    }else{
        console.log("equal numbers")
    }
}

greater(2,3);
greater(3,4);
greater(2,2);

//444444444444

function numberOrTooBig(number) {
    let border1 = 0;
    let border2 = 9;

    if (number >= border1 && number <= border2){
        switch (number) {
            case 0:
                console.log("Zero");
                break;
            case 1:
                    console.log("One");
                    break;  
            case 2:
                    console.log("Two");
                    break; 
            case 3:
                    console.log("Three");
                    break;  
            case 4:
                    console.log("Four");
                    break;  
            case 5:
                    console.log("Five");
                    break;  
            case 6:
                    console.log("Six");
                    break;  
            case 7:
                    console.log("Seven");
                    break;  
            case 8:
                    console.log("Eight");
                    break;        
            case 9:
                    console.log("Nine");
                    break;
            default:
                break;
        }
    } else if(number>border2){
        console.log("too Big")
    }       
}

numberOrTooBig(3);
numberOrTooBig(0);
numberOrTooBig(-1);
numberOrTooBig(11);

//5555555555

function calculateArea(figure,numOne,numTwo){
    let area=0;
    switch (figure) {
        case "square":
            area=numOne*numOne;
            break;
        case "rectangle":
            area=numOne*numTwo;
            break;
        case "triangle":
            area=numOne*numTwo/2;
            break;
        case "circle":
            area=Math.PI*Math.pow(numOne,2);
            break;
        default:
            break;
    }
    console.log(area.toFixed(2));
}

calculateArea("square", 5)
calculateArea("rectangle", 10, 3.5)
calculateArea("triangle", 4.5, 20)
calculateArea("circle", 10)

//66666666666

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

//77777777777777

function checkEvenOrOdd(number){
    let result;
    if(number%2==0){
        result="Even";
    }else{
        result="Odd";
    }
    console.log(result);
}

checkEvenOrOdd(1);
checkEvenOrOdd(2);

//888888888888
function speedIs(speed) {
    let result;
    if(speed<=10){
        result="slow";
    } else if(speed<=60){
        result="average";
    }else if(speed<=120){
        result="fast";
    }else if(speed<=160){
        result="super-fast";
    }else if(speed>160){
        result="turbo-fast";
    }

    console.log(result);
}

speedIs(10);
speedIs(59);
speedIs(120);
speedIs(121);
speedIs(183);
speedIs(59.99);
speedIs(60.001);



