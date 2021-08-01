// 创建系统模块依赖网站协议HTTP,创建网站服务器模块
const http = require('http');
//服务器的创建,app就是网站服务器对象
const app = http.createServer();
//处理请求参数模块
const querystring = require('querystring');
//为网站服务器添加请求事件,当客户端有请求来的时候
app.on('request', (req, res) => {
    //post是通过事件的方式接受的
    let postParams = '';
    req.on('data', params => {
        postParams += params;
    });
    req.on('end', () => {
        console.log(querystring.parse(postParams));
        // console.log(postParams);
    });
    res.end('ok');
});
//网站服务器创建一定要监听端口，没有监听是不会响应的
app.listen(3000);
console.log('网站服务器启动成功');