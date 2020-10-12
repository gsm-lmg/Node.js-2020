/*
    파일처리를 하기 위한 모듈 fs
    파일및 폴더 생성, 삭제 등.

    동기식과 비동기식: 함수가 바로 return 되는지의 여부에 따라 달라짐
    블로킹과 논블로킹: 백그라운드 작업 완료를 확인하는지의 여부
    동기식~블로킹 쌍 , 비동기식~논블로킹 쌍으로 이해하여도 됨.
*/

const fs = require('fs');

//1. 파일 쓰기 - 동기식 (C와 비슷하게 Line을 따라 처리, 처리되지 않은 라인은 다른일을 하지 못하고 대기)
fs.writeFileSync('./readme.txt', '동기식 파일 쓰기. 입력될 문자열을 여기에 전달');

//2. 파일 읽기 - 동기식
try {
    var data = fs.readFileSync('./readme.txt');
    // readFile의 결과물은 buffer이므로, .toString()을 붙여서 주로 사용.
    console.log(data);
    console.log(data.toString());
} catch (error) {
    console.error('fs.readFileSync Error', error);
}

//3. 파일 쓰기 - 비동기식 (콜백함수와 함께 호출 및 반환, 백그라운드에서 메인 스레드에 알림을 주면 콜백함수를 실행함)
fs.writeFile('./readme.txt', '비동기식 파일 쓰기 - (부가적인 내용)파일이 이미 존재하면 그 파일에 덮어씀...', (err, data) => {
    if(err) {
        console.log(err);
    }
});

//4. 파일 읽기 - 비동기식
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        console.log('fs.readFile Error');
    } else {
        console.log(data);
        console.log(data.toString());
    }
});