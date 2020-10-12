const fs = require('fs');

// 1. read stream 
//#region 1-1 flowing mode : stream을 만들고 data 이벤트와 end 이벤트로 처리한다.
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 8});  // chunk의 크기 8byte

const data = [];  // stream으로 넘어오는 데이터를 저장할 배열

// 스트림은 이벤트 기반으로 동작한다.(data, end, error....)
// 버퍼(청크)들이 들어올 때마다 data 이벤트가 발생한다.
// readme.txt 파일에서 데이터가 더 이상 없을 때 까지 data 이벤트가 발생한다.
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('chunk:', chunk, `chunk길이: ${chunk.length}`);
});

// readme.txt 파일에 더 이상 읽어올 데이터가 없으면 발생하는 이벤트
readStream.on('end', function(){
  console.log('end: ', Buffer.concat(data).toString('utf8'));
});

// 에러 처리
readStream.on('error', (err)=>console.log(err))
//#endregion



//2. write stream : http response에 사용됨.
const writeStream = fs.createWriteStream('./write2.txt');

writeStream.write('지금은\n');
writeStream.write('7교시\n');
writeStream.write('TMI\n');
writeStream.end('end');  // 파일 쓰기 완료

// writeStream으로 file에 쓰기가 완료되면 발생하는 이벤트
writeStream.on('finish', function(){
  console.log('파일 스트림 쓰기 완료');
});


// 2-2 paused mode
const writeStream = fs.createWriteStream('./write.txt');  // 데이터를 file에 기록할 수 있는 writeStream

// 터미널에서 입력을 받아들일 수 있는 표준 입력 'readable'이벤트
process.stdin.on('readable', () => {
  let chunk;
  console.log('새로운 데이터 도착');
  while((chunk = process.stdin.read())!==null){
    writeStream.write(chunk);
    if(chunk.toString() === 'exit\r\n')  // 'exit'라는 string 이 입력되면 빠져나간다.
      break;
  }
});



// 3. pipe
// readStream과 writeStream을 연결하여 파일이 복사되는 결과를 낳는다.
const rs = fs.createReadStream('./write2.txt');
const ws = fs.createWriteStream('./write3.txt');
rs.pipe(ws);

// // 새로운 기능
// const readStream = fs.copyFile('./write2.txt', './write3.txt', (err)=>console.log(err))