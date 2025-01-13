// 1. Falsy한 값 즉 거짓된 값
 let f1 = undefined;
 let f2 = null;
 let f3 = 0;
 let f4 = -0;
 let f5 = NaN;
 let f6 = "";
 let f7 = 0n; // 아주 큰 수 
 
 if(!f1){
    console.log("Falsy");
 }

 // 2. Truthy 한 값
 // -> 7가지 Falsy한 값들 뺴고 나머지 모든 값

 let t1 = "hello";
 let t2 = 123;
 let t3 = [];
 let t4 = {};
 let t5 = () => {};

 if (t5){
    console.log("Truthy");
 }

 //3. 활용 사례

 function printName (person){
    // 조건문이 너무 복잡해짐!
    // if(person === undefined || person === null ){
    //     console.log("person의 값이 없음");
    //     return;
    // }

    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
 }

 let person = {name: "경보희"};
 printName(person);

 let person2; // undefind
 printName(person2);

 let person3 = null; // null
 printName(person3);