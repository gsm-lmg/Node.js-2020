/*
    클라이언트는 서버로 요청(request)을 보내고,
    서버는 클라이언트의 요청을 읽고 처리한 뒤 클라이언트에 응답(response)을 보냄.
    -> 서버에는 요청을 받는 부분과 응답을 받는 부분이 있어야 함!
    
    요청과 응답은 이벤트 - 요청이 들어올 때를 기다리고 있다가 그것을 캐치하여 처리하는 - 방식
*/
/*
    localhost: 현재 컴퓨터의 내부 주소 (IP~127.0.0.1) -> 서버 개발시 테스트용으로 많이 쓰임
    포트: 프로세스를 구분하는 번호. 다양한 작업을 하기 위해 프로세스의 특성들마다 포트를 다르게 할당하여 요청들을 구분함.
*/


// http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있으므로 http모듈을 사용함.
// http 모듈에는 createServer 메서드가 존재. 인자로 요청에 대한 콜백함수를 넣을 수 있음.
// 서로 다른 포트번호로 여러 개의 서버를 운영할 수 있음.
// res 객체에는 write와 end 메서드가 있음.
// write의 첫 번째 인자는 클라이언트로 보낼 데이터, 버퍼를 보낼 수도 있고 여러 번 호출하여 여러 개의 데이터를 보낼 수도 있음
// end는 응답을 종료하는 메서드. 만약 인자가 존재한다면 그 데이터까지 클라이언트로 응답하고 나서 종료함.
const http = require('http');

// 1번 방식 - 포트 연결 완료 후 실행될 콜백 함수를 넣어줌.
http.createServer( (req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello 4628 Server!</p>');
}).listen(4628, () => {
    console.log('4628번 포트에서 서버 대기중입니다!');
});

// 2번 방식 - 메소드들을 사용하여 분리 작성 가능.
const server = http.createServer( (req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello 8823 Server!</p>');
});

server.listen(8823);

server.on('listening', () => {
    console.log('8823번 포트에서 서버 대기중입니다!');
});

server.on('error', (error) => {
    console.error(error);
});