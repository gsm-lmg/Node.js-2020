const MAX = 100;
function randomInteger() {
    return Math.floor((Math.random() * MAX));
}
function print() {
    return 'print test msg';
}

// module.exports 다른 파일에 모듈 노출
// module.exports = randomInteger;
// 아래처럼 해당 방식(단일연결)은 호출할 때
// 모듈을 연결한 객체만으로 호출 가능
module.exports = () => 'hello node!';

// 모듈 내 여러 개 함수를 노출시킬 경우 아래와 같이
module.exports.randomInteger = randomInteger;
module.exports.print = print;