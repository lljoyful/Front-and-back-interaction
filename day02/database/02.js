//引入mongoose第三方模块用来操作数据库
const mongoose = require('mongoose');
//数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    //连接成功    
    .then(() => { console.log('数据库连接成功') })
    //连接失败
    .catch((err) => { console.log('数据库连接失败\n', err) });
//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    auyhor: String,
    isPublish: Boolean
});
//使用规则创建集合,返回的是构造函数
const Course = mongoose.model('Course', courseSchema);
//创建文档
const course = new Course({
    name: 'node.js基础',
    auyhor: '黑马48集',
    isPublish: true
});
//将文档插入到数据库中
course.save();