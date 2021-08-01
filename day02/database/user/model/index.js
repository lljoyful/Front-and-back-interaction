//数据库
const mongoose = require('mongoose');
//数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('连接成功'))
    .catch(err => { console.log('连接失败', err) });