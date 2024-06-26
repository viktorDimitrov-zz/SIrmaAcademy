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
