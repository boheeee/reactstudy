// 1.콜백함수

function main(value){
    // console.log(value);
    value();
    // console.log("end");
}


main( () => {
    // console.log(" i am sub");
}
);

// 콜백 함수 활용

function repeat(count, callback){
    for (let idx =1 ; idx <= count; idx++){
        callback(idx);
    }
}

// function repeatDouble(count){
//     for (let idx =1 ; idx <= count; idx++){
//         console.log(idx * 2);
//     }
// }
repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, function(idx) {
    console.log(idx * 2);
});

