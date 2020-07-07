console.log("ceshi");

//创建第一个http服务


//引入http模块

var _http = require('http');

//启动服务,创建服务器

_http.createServer(function(request,response){
    //处理响应与请求

    //http头部信息
    //状态码:200
    //内容类型:text/plain,text/html,application/json,xml...

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    //向客户端发送数据
response.end('<h1>第一个http服务</h1>');
}).listen(5239);//端口号

console.log('5239端口已创建');