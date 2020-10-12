/*
    노드에서는 예외처리가 매우 중요함 - 노드는 싱글스레드이므로... 스레드가 멈춘다 = 서버가 멈춘다
    일부 내장 모듈의 에러는 실행중인 프로세스를 멈추지 않고 노드 자체에서 잡아준다.
*/

// 방법1. 에러가 발생할 것 같은 부분을 try - catch 문으로 감싸준다.
// 방법2. (예측이 불가능한 에러를 처리하기 위해) process.on('uncaughtException' 사용)
//      노드 공식문서에서는 uncaughtException 이벤트 발생 후 다음 동작을 보증하지 않으므로, 최후의 수단으로 사용할 것을 권함
process.on('uncaughtException', (error) => {
    console.log('예기치 못한 에러 발생', error);
})

// 1초마다 오류 뿜뿜
setInterval(() => {
    throw new Error('방법2 서버 에러(try-catch로 감싸지 못한');
}, 1000);

// 2초 지나고 기능 실행
setTimeout(() => {
    console.log('실행됩니다');
},2000);

setInterval(() => {
    console.log('10초 간격으로 반복');
    try {
        throw new Error('방법1 서버 에러');
    } catch(error) {
        console.error(error);
    }
}, 10000);