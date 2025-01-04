// 함수 선언

// function greeting (){
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting(); // 호출해야 됨 소괄호 필수
// console.log("호출 후");

function getArea (width, height){ // width => 매개변수

    function another(){ // 중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;
    return area; // return후에 밑에 코드가 있더라도 실행 안 됨
}

// 호출하는 값이 위에 있어도 정상적으로 호출됨 -> 호이스팅
//return 값이 있을 때
let area1 = getArea(10 , 20); // 10, 20을 인수라고 부름
console.log(area1);

//없을 때
getArea(20 , 20);
