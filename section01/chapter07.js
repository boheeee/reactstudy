// 1. 대입 연산자
let var1 = 1; // = 이 대입 연산자

// 2. 산술 연산자

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);

// 3. 복합 대입 연산자
 let num7 = 10;
 // num7 = num7 + 10; 얘는 너무 코드가 길어

 num7 += 10; // 산술 연산자 다 가능

 console.log(num7);

 // 4. 증감 연산자
 let num8 = 10;
 num8++; // 뒤에 붙이면 라인이 끝나고 적용, 앞에 붙이면 라인에 바로 적용
 console.log(num8); // 11
 console.log(num8++); // 11 후위 연산
 (++num8); // 13 전위 연산

 // 5. 논리 연산자

 let or = true || false;
 let and = true && false;
 let not = !true;
 console.log(or , and, not);

 // 6. 비교 연산자
 let comp1 = 1 === 2; //= 3번 써야지 자료형까지 비교가능함
 let comp2 = 1 !==2;

 console.log(comp1 , comp2);

 let comp3= 2 > 1;
 let comp4 = 2 < 1;

 let comp5 = 2 <= 1;
 let comp6 = 2 >= 1;



