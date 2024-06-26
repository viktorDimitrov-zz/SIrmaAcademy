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
