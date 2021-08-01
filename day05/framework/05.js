//引入express框架
const express = require('express');
const fs = require('fs');
//创建网站服务器
const app = express();
app.get('/index', (req, res, next) => {
    // throw new Error('程序发生了未知错误');
    fs.readFile('./01.js', 'utf8', (err, result) => {
        if (err != null) {
            console.log('bb');
            //传递参数
            next(err);
        } else {
            res.send(result);
        }
    });
});
//错误处理
app.use((err, req, res, next) => {
    console.log('aa');
    res.status(500).send(err.message);
});

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');