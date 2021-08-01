//1.引入系统模块HTTP
//2.创建网站服务器
//3.为网站服务器对象添加请求事件
//4.实现路由功能
//4.1获取客户端的请求方式
//4.2获取客户端的请求地址
const http = require('http');
const url = require('url');
const app = http.createServer();
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    //大写转化为小写
    const method = req.method.toLowerCase();
    const pathname = url.parse(req.url).pathname;
    if (method == 'get') {
        if (pathname == '/index' || pathname == '/') {
            res.end('<h2>欢迎来到首页</h2>');
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页');
        } else {
            res.end('页面不存在');
        }
    } else if (method == 'post') {

    } else {

    }
});
app.listen(3000);
console.log('服务器启动成功');