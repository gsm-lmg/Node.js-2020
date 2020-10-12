var net = require('net')

var server = net.createServer(function(socket){
    console.log('클라이언트 접속')
    socket.write('Welcome to socket server\n')

    // 클라이언트의 데이터 전송 이벤트
    socket.on('data', function(data){
        console.log('클라이언트가 보냄 : ', data.toString())
    })

    // 접속 종료 이벤트
    socket.on('end', function(){
        // 클라이언트 접속 종료
        console.log('클라이언트 접속 종료')
    })
})

server.on('listening', ()=>console.log('Server is listening'))
server.on('close', ()=>console.log('Server closed'))
server.listen(3000)