const fs = require('fs');
fs.writeFile('./demo.txt', '马上写入', err => {
    //失败了就输出控制信息
    if (err != null) {
        console.log(err);
        return;
    }
    console.log('写入成功');
});
fs.readFile('./demo.txt', 'utf8', (err, doc) => {

    if (err == null) {
        console.log(doc);
    } else {
        console.log(err);
    }


});