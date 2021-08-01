//引入router模块
const getRouter = require('router');
//获取路由对象
const router = getRouter();
//引入模板引擎
const template = require('art-template');
//引入querystring模块
const queryString = require('querystring');
const Student = require('../model/user');
//呈现创建学生信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
});
//呈现学生信息页面
router.get('/list', async(req, res) => {
    //查询学生信息
    let students = await Student.find();
    // console.log(students);
    let html = template('list.art', {
        students: students
    });
    res.end(html);
});
//实现学生信息添加功能路由
router.post('/add', (req, res) => {
    //收post请求参数
    let formData = '';
    //添加data事件获取数据
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async() => {
        // console.log(queryString.parse(formData));
        await Student.create(queryString.parse(formData));
        //重定向
        res.writeHead(301, {
            Location: 'list'
        });
        res.end();
    })
});
module.exports = router;