// 'readme.txt'파일이 존재하는지 확인, 파일 읽기, 
// 파일의 일부분을 수정, 수정된 내용으로 파일 저장, 다시 파일 읽기

// 1. 콜백 함수
var fs = require('fs');

fs.access('./readme.txt', function(err){  // 파일 존재 여부 체크
    if(err){
        console.log(err.message)
    }else{
        fs.readFile('./readme.txt', function(err, data){  // 파일 읽어오기
            if(err){
                console.log(err.message);
            }else{
                console.log(data.toString('utf8'));
                var newData = data.toString().replace('node.js', 'world');  // 일부 텍스트 수정
                fs.writeFile('./readme.txt', newData, function(err){  // 수정된 내용으로 파일 작성
                    if(err){
                        console.log(err.message);
                    }else{
                        fs.readFile('./readme.txt', function(err, data){
                            if(err){
                                console.log(err.message)
                            }else{
                                console.log(data.toString());
                            }
                        })
                    }
                })
            }
        })
    }
})


// // 2. Promise를 사용한 비동기 처리
var fsPromise = require('fs').promises;

fsPromise.access('./readme.txt')
    .then(function(){
        return fsPromise.readFile('./readme.txt');
    })
    .then(function(data){
        console.log(data.toString());
        var newData = data.toString().replace('world', 'node.js');
        return fsPromise.writeFile('./readme.txt', newData);
    })
    .then(function(){
        return fsPromise.readFile('./readme.txt');
    })
    .then(function(data){
        console.log(data.toString());
    })
    .catch(function(){
        console.log('error');
    })


// 3. async, await를 이용한 비동기 처리
async function asyncFunc(){
    await fsPromise.access('./readme.txt');
    let data = await fsPromise.readFile('./readme.txt');
    console.log(data.toString());
    var newData = data.toString().replace('node.js', 'world');
    await fsPromise.writeFile('./readme.txt', newData);
    data = await fsPromise.readFile('./readme.txt');
    console.log(data.toString());
}
asyncFunc();