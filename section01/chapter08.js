// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefind 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1 = undefind
console.log(var4); // var2

let var6 = var3 ?? var2
console.log(var6); // 처음 값 출력

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello" // 변수의 타입이 고정되어 있지 않음

let t1 = typeof var7;
console.log(t1); // srting

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환

let var8 =10;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"

let res = var8 % 2 === 0? "짝수" : "홀수"; // ?을 기준으로 왼쪽에는 조건식 오른쪽에는 :을 기준으로 왼쪽은 참, 오른쪽은 거짓
console.log(res);

