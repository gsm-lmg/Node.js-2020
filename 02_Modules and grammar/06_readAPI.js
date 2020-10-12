var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 모듈 로딩과 객체 생성
// API 문서 참조, 기본 사용 예시

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
// });

rl.setPrompt('>> ');
rl.prompt();
rl.on('line', (line) => {
    if(line == 'exit') {
        rl.close();
    }
    console.log('you typed ', line);
    rl.prompt();
});
rl.on('close', () => {
    process.exit();
});