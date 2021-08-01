const { Article } = require('../../model/article');
//导入分页模块
const pagination = require('mongoose-sex-page');
module.exports = async(req, res) => {
    //获取页码值
    const page = req.query.page;
    //从数据库中查询数据
    // let result2 = await pagination(Article).page(1).size(4).display(5).find().populate('author').exec();
    let result = await Article.find().populate('author').lean();
    let mypage = await pagination(Article).page(page).size(2).display(5).exec();
    // res.send(result);
    // res.send(mypage);
    // return;
    // res.send('欢迎来到博客首页');
    // let article2 = await Article.findOne({ _id: id }).populate('author');
    // let result1 = JSON.stringify(result2);
    // let result = JSON.parse(result1);
    //渲染模板并传递数据
    res.render('home/default.art', {
        result,
        mypage
    });

}