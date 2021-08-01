const { User } = require('../../model/user');
module.exports = async(req, res) => {
    //获取要删除的用户id
    await User.findOneAndDelete({ _id: req.query.id });
    //重定向
    res.redirect('/admin/user');
}