var net = require('net')
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('>> ');
var socket = new net.Socket();
socket.connect({port:3000, host:'localhost'}, function(){
    console.log('서버와 연결 성공')

    socket.on('data', function(data){
        var str = data.toString()
        console.log('recv from Server: ', str)
    })

    rl.setPrompt('>> ');
    rl.prompt();
    rl.on('line', (line) => {
        if(line == 'exit') {
            rl.close();
        } else {        // 서버에게 데이터 전송
            socket.write(line);
            rl.prompt();
        }
    });

    rl.on('close', () => {
        socket.end();
    });
    
    socket.on('end', ()=>console.log('서버 연결 종료'))
})