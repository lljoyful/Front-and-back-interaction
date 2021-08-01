//导入
const bcrypt = require('bcrypt');
//生成随机字符串
//genSalt方法接收一个数值作为参数
// 数值越大生成的随机字符串复杂度越高
// 数值越小生成的随机字符串复杂度越低
// 默认值是10

async function run() {
    const salt = await bcrypt.genSalt(10);
    //对密码进行加密
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}
run();