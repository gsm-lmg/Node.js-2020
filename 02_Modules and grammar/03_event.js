/*
    특정한 메소드는 내부적으로 이미 잘 만들어진 event가 있지만,
    우리가 직접 이벤트를 선언하여 다양한 동작을 직접 구현할 수 있음.
    웹서버를 구축할 때 많이 사용됨.
*/

const myEventEmitter = require('events');

const myEvent = new myEventEmitter();

// addListener ~ on과 기능이 비슷, 이벤트명에 여러 개의 이벤트를 붙여 등록할 수 있음.
// 메소드 명을 once로 하면 한 번만 호출함.
myEvent.addListener('event1', () => {
    console.log('이벤트1');
});
myEvent.on('event1', () => {
    console.log('이벤트1에덧붙임');
});
myEvent.once('event1', () => {
    console.log('이벤트1-해당영역은 한 번만 실행됨');
});

// emit메소드를 통해 이벤트를 호출할 수 있음.
myEvent.emit('event1');
myEvent.emit('event1');
myEvent.emit('event1');