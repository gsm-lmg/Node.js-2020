// 모듈의 종류
// 1. 내장 모듈
const url = require('url');
const parseURL = url.parse("https://www.gsm.gen.hs.kr/subject?name=node");

// 내장모듈 url을 require로 불러와서
//개체의 parse함수를 이용해 url에서 정보 추출
console.log(parseURL.protocol);
console.log(parseURL.host);
console.log(parseURL.query);


// 2. 3rd party 모듈
// 제작사에서 만든 것이 아닌 제3자 라이브러리
// npm(Node Package Manager)를 사용해 설치
// npm install [모듈명]
// node_modules 폴더에 설치됨
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node");
});
app.listen(4628, () => {
    console.log("Express App started on Port 4628");
});


// 3. 사용자 정의 모듈 만들고 요청하기
// 코드의 복잡도를 낮추고 재사용하기 위해
// 상대경로로 지정해야함
const extModule = require('./02_extModules');
// 사용자 정의 모듈을 단일로 연결한 경우
// console.log(extModule()); 로 호출 가능
console.log(extModule());

console.log(extModule.randomInteger());
console.log(extModule.randomInteger());
console.log(extModule.print());
console.log(extModule.print());