// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; //num이 알아서 string 타입으로 변환됨
//console.log(result);
// 1020 출력됨

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // number라는 내장함수

console.log(10 + strToNum1);

let str2 = "10개"; // 이떄 숫자가 앞쪽에 있어야 함, 앞쪽에 숫자가 아닌 다른 영어가 있다면 nan으로 표기됨
let strToNum2 = parseInt(str2); // 숫자만 포함되어 있지 않은 걸 바꾸고 싶을 때는 이 함수 사용하기

console.log(strToNum2);

// 숫자 -> 문자

let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");