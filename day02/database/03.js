const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err, '数据库连接失败'); });
const courseSchema = new mongoose.Schema({
    name: String,
    auyhor: String,
    isPublish: Boolean
});
const Course = mongoose.model('Course', courseSchema);
//像集合中插入文档
// Course.create({
//     name: 'javascript',
//     auyhor: '黑马49集',
//     isPublish: false
// }, (err, doc) => {
//     console.log(err);
//     console.log(doc);
// });
Course.create({
        name: 'html5',
        auyhor: 'test',
        isPublish: true
    })
    .then(doc => { console.log(doc); })
    .catch(result => { console.log(result); });