var path = require('path');

console.log('디렉터리 경로: ', __dirname);   //디렉토리 경로
console.log('파일 경로: ', __filename);  //파일 경로

console.log('path.디렉터리 경로: ', path.dirname(__filename)); // 디렉토리 경로
console.log('path.확장자: ', path.extname(__filename)); // 확장자
console.log('path.파일 이름: ', path.basename(__filename)); //파일 이름
console.log('path.분석한 내용을 객체로 저장: \n', path.parse(__filename));  // 분석한 내용 객체로 변환

var newPath = path.format({ root: 'D:\\',
dir: 'D:\\Repository2020\\Node02',
base: 'path.js',
ext: '.js',
name: 'path' });
console.log('newPath: ', newPath);

var createPath = path.join(
  __dirname, 
  path.sep,         // 
  '..',
  'Chapter02', 
  path.sep, 
  'index.html');
console.log('createPath: ', createPath);