// 1. 탬플릿 문자열
// 문자열을 직관적으로 사용할 수 있게 됨.
// ``으로 감싸고 변수는 ${'변수명'}으로 표시
var num1 = 1;
var num2 = 2;
var string = num1 + ' 더하기 ' + num2 + '는 \'' + (num1+num2) + '\'';
console.log(string);

string = `${num1} 더하기 ${num2}는 '${num1+num2}'`;
// 백틱과 \n 등의 특문만 역슬래시 (\) 사용
console.log(string);


// 콜백함수
// 정의의 형태
// a, b를 넘겨받음, 완료되었을 때 callback함수를 호출함
const plus = (a, b, callback) => {
    let result = a + b;
    callback(result);
}
// 호출의 형태
plus(5, 10, (res) => {
    console.log(res);
});

const plus_minus = (a, b, cb) => {
    cb(a+b, a-b);
}
plus_minus(5, 10, (res1, res2) => {
    console.log(res1);
    console.log(res2);
});

const loading = (path, done) => {
    console.log('전달받은 경로: ', path);
    done(path + 'sample.txt');
}
loading('/folder/text', (result) => {
    console.log('완료', result);
});

// 콜백활용 및 콜백지옥
// 비동기 Non-blocking I/O가 기본 설계 원칙
// function들이 순서대로 완료된다는 보장이 없음.
// 동기성(순서대로)을 보장하기 위해 callback을 많이 이용
// #1
console.log('Hello');
// #2
setTimeout(() => {
	console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');
// Hello, Hello Again, Bye 순서로 출력됨.

console.log('Hello');

setTimeout(function() {
    console.log('Bye')
}

/*
    console.log("1st");
    setTimeout( () => {
        console.log("2nd");
    }, 0);
    console.log("3rd");
*/
// 두 번째 인자가 0이므로 곧바로 실행될 것이라고 예측할 수 있으나, 비동기방식에서는 그렇지 않음
// -> Node(자바스크립트)에서 비동기식 처리 모델인 Web API가 동작하면서 비동기적인 메소드임을 파악하면 비동기 처리를 위해 보류
// -> 비동기적 API를 제외한 모든 코드가 실행된 이후에 비동기 메소드를 처리

// 비동기 방식은 접수 순서가 중요한 것이 아니라, 어떤 이벤트가 먼저 처리되느냐가 중요함!
/*
var value;

function f1() {
    setTimeout( () => {
        value = 3;
        console.log(`in setTimeout, value is ${value}`);
    },3000);
    console.log(`in f1, value is ${value}`);
    f2();
}

function f2() {
    console.log(value);
}
f1();
*/

// 비동기 처리 이벤트들에 있어서 순서가 중요해지게 된다면?

function f1() {
    setTimeout( () => {
        value = 3;
        console.log(`in setTimeout, value is ${value}`);
        f2();
    },3000);
}

function f2() {
    console.log(value);
}
f1();