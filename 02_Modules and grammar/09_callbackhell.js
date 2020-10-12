// 파일명: callbackhell.js

const { resolve } = require("path");

// 콜백지옥이란? 비동기 프로그래밍에서 동기성을 보장하기 위해
// 콜백함수를 쓰다보면 코드의 들여쓰기 깊이가 점차 깊어지게 됨.
// 가독성이 크게 떨어지고, 오류 검출에도 어려움을 겪게 됨.
/* 콜백지옥의 예
step1(step1Val, (err, value1) => {
    if (err) {
        console.log(err);
        return;
    }
    step2(step2Val, (err, value2) => {
        if (err) {
            console.log(err);
            return;
        }
        step3(step3Val, (err, value3) => {
            if (err) {
                console.log(err);
                return;
            }
            step4(step4Val, (err, value4) {
                // 정신 건강을 위해 생략
            });
        });
    });
});
*/

// Promise 패턴
// 프로미스 객체를 생성 후 사용
// 프로미스 객체에서 resolve나 reject를 받아 상태 전달
const promise = new Promise((resolve, reject) => {
    try {
        // Somthing execute code
        resolve('성공');
    } catch {
        reject('실패');
    }
})
// 성공상태 값은 then으로, 실패상태 값은 catch로 받아올 수 있음
promise
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
// 프로미스 방식을 지원하지 않는 메서드가 있음


// 프로미스 객체는 여러 개 연결(Chaining) 가능
// resolve('인자')를 then으로 넘겨받고
// then에서의 return 값을 다음 then으로 넘겨받음
new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  })
  .then((step1) => {
    console.log(step1); // 1
    return new Promise((resolve, reject) => {
        resolve(step1 + 10);
    });
  })
  .then((step2) => {
    console.log(step2); // 11
    return new Promise((resolve, reject) => {
        resolve(step2 + 20);
    });
  })
  .then((step3) => {
    console.log(step3); // 31 {
  })
  .catch((err) => {console.log(`err: ${err}`)});


// async / await
// 프로미스 객체를 반환하는 비동기 코드를 더 깔끔하게 줄여줌.
// async function으로 선언, resolve 되어야 할 부분을 await 붙여줌
async function test(){
    await foo(1, 2000)
    await foo(2, 500)
    await foo(3, 1000)
}

function foo(num, sec){
    setTimeout( () => {
        console.log(num);
    }, sec);
}
/*
function foo(num, sec){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log(num);
            resolve("async는 Promise방식을 사용합니다.");
        }, sec);
    });
}
*/

test();

