const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('连接成功'))
    .catch(err => console.log('连接失败'));