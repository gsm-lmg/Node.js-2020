//fs 모듈을 사용하여 만들어둔 html 페이지 자체를 클라이언트에 띄워줄 수 있음

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //클리언트의 다양한 정보 - request message - 확인하기
    console.log('request headers: \n', req.headers);
    console.log('request method: ',req.method);
    console.log('reqest url: ', req.url);
    console.log(require('url').parse(req.url.toString(), true));
    console.log(req.rawHeaders);
    fs.readFile('./test.gif', (err, data) => {
        if(err) {
            throw err;
        }
        res.end(data);
    });
    
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중입니다!');
});

/********** 실습 중 발견한 것 **********/
// C:\chpater2\example.js 와 chapter2 폴더 안에 example.html 파일이 있는 경우
// c:\chapter2까지 경로 접근하고 나서 실행시켜야 함
// 예를 들어서 C:\에서 node .\chapter2\example.js 와 같이 실행시키면
// 코드에서도 상대경로를 찾는 기준이 C:\에서 시작함