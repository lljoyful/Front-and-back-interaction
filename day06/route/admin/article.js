//将文章集合的构造函数导入到当前文件中
const { Article } = require('../../model/article');
//导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');
module.exports = async(req, res) => {
    //收客户端传递过来的页码
    const page = req.query.page;
    //标识.标识当前访问的是wenzhang管理页面
    req.app.locals.currentLink = 'article';
    //查询所有文章数据
    // page指定当前页
    // size指定每页显示的数据条数
    // display指定客户端要显示的页码数量
    // exec 向数据库中发送查询请求

    let articles = await Article.find().populate('author').lean();
    let mypages = await pagination(Article).page(page).size(2).display(3).exec();
    // res.send(mypages);
    //渲染文章列表页面模板
    res.render('admin/article.art', {
        articles: articles,
        mypages: mypages
    });
}