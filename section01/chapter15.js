// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "경보희", // key : value
    age: 22,
    hobby: "애니", // 띄어쓰기 필요한 객체의 경우는 "" 필수
};

//3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name; // 객체 이름.key
// console.log(name);

let age = person["age"]; // " " 이거 있어야 함.
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티 추가
person.job = "student";
person["food"] = "떡보끼";

console.log(person);

// 3.3 프로퍼티 수정

person.job = "educator"
person["food"] = "초콜릿";
console.log(person);

// 3.4 프로퍼티 삭제

delete person.job;
delete person["food"];
console.log(person);

// 3.5 프로퍼티 존재 유무 (in 연산자)
let result1 = "name" in person;
console.log(result1);


