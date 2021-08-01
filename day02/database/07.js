// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入文章标题'],
        trim: true
    },
    password: {
        type: String,
        minlength: [4, '文章长度不能小于4'],
        maxlength: 6,
        trim: true
    },
    age: {
        type: Number,
        //数字的范围
        min: 18,
        max: 100
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: {
            values: ['html', 'css', 'java'],
            message: '分类名称要在一定的范围内才可以'
        }
    },
    author: {
        type: String,
        validate: {
            //返回的是布尔值
            validator: (v) => {
                //v是要验证的值
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});
const Post = mongoose.model('Post', postSchema);
// Post.create({ title: 'java', password: '   1234  ', age: 22 }).then(result => { console.log(result); });
// Post.create({ title: 'css', password: '3233', age: 32 }).then(result => { console.log(result); });
// Post.create({ title: 'html5', password: '4323', age: 32, category: 'html' }).then(result => { console.log(result); });
Post.create({ title: 'css', password: '12564', age: 33, category: 'css5', author: 'dbd' })
    .then(result => console.log(result))
    .catch(error => {
        //获取错误信息对象
        const err = error.errors;
        //循环错误信息对象
        for (var attr in err) {
            //将错误信息打印到控制台中
            console.log(err[attr]['message']);
        }
        // console.log(error);
    });