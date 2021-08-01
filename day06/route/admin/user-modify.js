const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async(req, res, next) => {
    //接收客户端传递股哦来的请求参数
    const { username, email, role, state, password } = req.body;
    //即将要修改的用户id
    const id = req.query.id;
    // res.send(body.password);
    let user = await User.findOne({ _id: id });
    //密码比对
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        //比对成功
        // res.send('密码比对成功');
        //将用户信息更新到数据库中
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        //重定向页面
        res.redirect('/admin/user');
    } else {
        //比对失败
        let obj = { path: '/admin/user-edit', message: '密码比对失败，不能修改', id: id }
        next(JSON.stringify(obj));
    }
}