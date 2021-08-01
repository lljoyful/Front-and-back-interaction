// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// 文章集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        //ref是关联的集合名字
        ref: 'User2'
    }
});
// 用户集合
const User2 = mongoose.model('User2', userSchema);
// 文章集合
const Post2 = mongoose.model('Post2', postSchema);
// 创建用户
// User2.create({ name: 'itheima' }).then(result => console.log(result));
//创建文章
// Post2.create({ title: '哈利波特', author: '60df21edfd8c2363c00fd9c9' })
//     .then(result => console.log(result));

Post2.find().select('title author -_id').populate('author').then(result => console.log(result));