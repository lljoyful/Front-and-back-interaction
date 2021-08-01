// 创建系统模块依赖网站协议HTTP,创建网站服务器模块
const http = require('http');
const url = require('url');
//服务器的创建,app就是网站服务器对象
const app = http.createServer();
//为网站服务器添加请求事件,当客户端有请求来的时候
app.on('request', (req, res) => {
    // req.method
    // console.log(req.method);
    //获取请求地址
    //req.url
    // console.log(req.url);
    //获取请求报文信息
    //req.headers
    // console.log(req.headers);

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });

    // console.log(req.headers['accept']);
    console.log(req.url);
    // console.log(url.parse(req.url, true).query);
    let { query, pathname } = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.age);
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>欢迎来到首页</h2>');
    } else if (pathname == '/list') {
        res.end('welcome to listpage');
    } else {
        res.end('not found');
    }
    // if (req.method == 'POST') {
    //     res.end('post');
    // } else if (req.method == 'GET') {
    //     res.end('get');
    // }
    // res.end('<h2>hello user!</h2>')
});
//网站服务器创建一定要监听端口，没有监听是不会响应的
app.listen(3000);
console.log('网站服务器启动成功');