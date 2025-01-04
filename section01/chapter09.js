// 1. if조건문

let num = 10;

if(num >= 10){
    // console.log("num은 10 이상입니다.");
}
else if( num >=5){
    // console.log("num은 5 이상입니다.");
}
else{
    // console.log("조건이 거짓입니다.");
}

// 2. Switch 문

let animal = "cat";

switch(animal){
    case "cat":{
        console.log("고양이");
        break; // 필수
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default:{ // 아무것도 해당되지 않을 때
        console.log("그런 동물은 전 잘 모릅니다.");
    }
}