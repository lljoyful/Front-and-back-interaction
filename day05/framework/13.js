//引入express框架
const express = require('express');
const path = require('path');
//创建网站服务器
const app = express();

//实现静态资源访问功能
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000);