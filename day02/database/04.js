// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model('User', userSchema);
//查询所有文档
// User.find().then(result => { console.log(result); })
// User.find({ _id: '5c09f1e5aeb04b22f8460965' }).then(result => { console.log(result); });
// User.findOne({ name: '李四' }).then(result => { console.log(result); });
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => { console.log(result); });
// User.find({ hobbies: { $in: ['足球'] } }).then(result => { console.log(result); });
// User.find().select('name age -_id').then(result => { console.log(result); });
// User.find().sort('age').then(result => { console.log(result); });
// User.find().select('name age -_id').sort('age').then(result => { console.log(result); });
// User.find().skip(2).limit(2).then(result => { console.log(result); });
User.find().select('name age -_id').sort('age').skip(2).limit(2).then(result => { console.log(result); });