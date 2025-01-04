// for

for(let idx = 0; idx < 5; idx++){

    if(idx % 2 === 0){
        continue; // 밑에 코드는 실행하지 않고 다음으로 넘어가기
    }
    console.log(idx); // 0 1 2 3 4

    if (idx >= 3){
        break;
    }
}