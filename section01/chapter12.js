function funA(){
   // console.log("funA");
}

let varA = funA;
// console.log(varA); // 함수 자체가 출력됨

let varB = function (){ // 익명 함수, 호이스팅 안 됨
    // console.log("funB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varC(10)); // 이거는 값이 출력

console.log(varC); // 함수 출력