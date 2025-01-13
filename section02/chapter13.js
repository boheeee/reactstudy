function add10(num) {
    const promise = new Promise((resolve, reject) => {
      // 비동기 작업 실행하는 함수
      // executor
  
      setTimeout(() => {
        if (typeof num === "number") {
          resolve(num + 10);
        } else {
          reject("num이 숫자가 아닙니다");
        }
      }, 2000);
    });
  
    return promise;
  }
  
  //then 메서드
  // -> promise 함수가 성공하고 난 후에!
  add10(0)
    .then((result) => {
      console.log(result);
      return add10(result);
    })
    .then((result) => {
      console.log(result);
      return add10(undefined);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => { // 실패했을 때
      console.log(error);
    });