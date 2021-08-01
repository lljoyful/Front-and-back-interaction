const template = require('art-template');
const path = require('path');
const dateFormat = require('xg-dataformate');

// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 导入模板变量(就这么写，这是固定写法)
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = '.html';

const html = template('06.art', {
    time: new Date()
});

console.log(template('07', {}));
console.log(html);