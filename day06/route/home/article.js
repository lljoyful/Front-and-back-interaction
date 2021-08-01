const { json } = require('body-parser');
const { Article } = require('../../model/article');
//导入评论集合构造函数
const { Comment } = require('../../model/comment');
module.exports = async(req, res) => {
    //接收客户端传递股哦来的文章id值
    const id = req.query.id;
    //根据id查询文章详细信息
    let article2 = await Article.findOne({ _id: id }).populate('author');
    let article1 = JSON.stringify(article2);
    let article = JSON.parse(article1);
    //查询当前文章锁对应的评论信息
    let comments2 = await Comment.find({ aid: id }).populate('uid');
    let comments1 = JSON.stringify(comments2);
    let comments = JSON.parse(comments1);
    // res.send(comments);
    res.render('home/article.art', {
        article: article,
        comments: comments
    });
}