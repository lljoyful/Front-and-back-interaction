const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '02.art');

const html = template(views, {
    name: '张三',
    age: 12,
    // content: '<h1>我是标题</h1>'
})

console.log(html);