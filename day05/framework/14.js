//引入express框架
const express = require('express');
const path = require('path');
//创建网站服务器
const app = express();

//告诉express框架使用什么模板引擎渲染什么后缀的模板文件
app.engine('art', require('express-art-template'));
//告诉express框架模板存放的位置是什么
app.set('views', path.join(__dirname, 'views'))
    //告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'message'
    });
});
app.get('/list', (req, res) => {
    res.render('list', {
        msg: 'list page'
    });
})
app.listen(3000);