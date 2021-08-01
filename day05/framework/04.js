//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
// app.use((req, res, next) => {
//     res.send('网站正在维护......');
// });
app.use('/admin', (req, res, next) => {
    //用户没登录
    let isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.send('您没有登录，请先登录');
    }
});
app.get('/admin', (req, res) => {
    res.send('您已经登录，可以访问当前页面');
});
app.use((req, res, next) => {
    //设置状态码
    res.status(404).send('当前页面不存在');
});
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');