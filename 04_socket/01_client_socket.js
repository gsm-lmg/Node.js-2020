var net = require('net')

var socket = new net.Socket();
socket.connect({port:3000, host:'localhost'}, function(){
    console.log('서버와 연결 성공')

    // 서버에게 데이터 전송
    socket.write('Hello socket server\n')

    // 연결 종료
    socket.end()
    
    socket.on('data', function(data){
        var str = data.toString()
        console.log('recv data: ', str)
    })

    socket.on('end', ()=>console.log('서버 연결 종료'))

    
})