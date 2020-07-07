//nodejs事件

var _events = require('events');

//实例化EventEmitter类
var _EventEmitter = new _events.EventEmitter();

//绑定事件1
_EventEmitter.on('标记1',function(){
    console.log('标记1事件被触发');
});

//绑定事件2
_EventEmitter.on('标记2',function(){
    console.log('标记2事件被触发');
});

//绑定timeout事件
_EventEmitter.on('timeout',function(){
    console.log('timeout事件被触发');
});

//绑定同名传参事件
_EventEmitter.on('传参',function(arg1,arg2){
    console.log('xxx111',arg1);
});

//绑定同名传参事件
_EventEmitter.on('传参',function(arg1,arg2){
    console.log('xx2222',arg2);
});


//触发事件
_EventEmitter.emit('标记1');
_EventEmitter.emit('标记2');
//经过五秒触发timeout事件
setTimeout(function(){
    _EventEmitter.emit('timeout');
},3000);
//通过一个emit触发多个事件arg1,arg2
_EventEmitter.emit('传参','参数1','参数2');

console.log(_EventEmitter);