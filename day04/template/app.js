//导入模板引擎
const template = require('art-template');
const path = require('path');
//template方法是用来拼接字符串的
const views = path.join(__dirname, 'views', 'index.art');
// 第一个参数路径要写绝对路径,第二个参数要在模板中显示的数据对象类型
//返回拼接好的字符串
const html = template(views, {
    name: '张三',
    age: 20
});
console.log(html);