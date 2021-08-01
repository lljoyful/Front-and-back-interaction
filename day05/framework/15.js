const express = require('express');
const path = require('path');
const app = express();
// 模板配置
app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art');

app.locals.users = [{
    name: '张三',
    age: 12
}, {
    name: '赵四',
    age: 20
}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    })
});

app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页'
    });
})


// 端口监听
app.listen(3000);