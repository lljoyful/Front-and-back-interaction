//搭建网站服务器
const http = require('http');

//url
const url = require('url');
const querystring = require('querystring');

require('./model/index');
const User = require('./model/user');
//创建服务器 27017是mongodb数据库的默认端口
const app = http.createServer();
//为服务器添加请求事件
app.on('request', async(req, res) => {
    //请求方式
    const method = req.method;
    //pathname请求地址
    const { pathname, query } = url.parse(req.url, true);
    if (method == 'GET') {
        //呈现用户列表页面
        if (pathname == '/list' || pathname == '/') {
            //查询用户信息
            let users = await User.find();
            //HTML字符串
            let list = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
            `;
            //对数据循环
            users.forEach(item => {
                // console.log(item.email);
                list += `
                <tr>
				    <td>${item.name}</td>
				    <td>${item.age}</td>
				    <td>
				`;
                item.hobbies.forEach(item => {
                    list += `<span>${item}  </span>`
                });
                list += `
                    </td>
				    <td>${item.email}</td>
				    <td>
				    	<a href="/remove?id=${item._id}" class="btn btn-danger    btn-xs">删除</a>
				    	<a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
				    </td>
			    </tr>
            `
            });
            list += `</table>
            </div>
        </body>
        </html>`;
            res.end(list);
        } else if (pathname == '/add') {
            //呈现添加用户界面
            let add = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                	<meta charset="UTF-8">
                	<title>用户列表</title>
                	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                </head>
                <body>
                	<div class="container">
                		<h3>添加用户</h3>
                		<form method="post" action="/add">
                		  <div class="form-group">
                		    <label>用户名</label>
                		    <input type="text"  class="form-control"   name="name"  placeholder="请填写用户名">
                		  </div>
                		  <div class="form-group">
                		    <label>密码</label>
                		    <input type="password" class="form-control" name="password"  placeholder="请输入密码">
                		  </div>
                		  <div class="form-group">
                		    <label>年龄</label>
                		    <input type="text" class="form-control" name="age" placeholder="请填写年龄">
                		  </div>
                		  <div class="form-group">
                		    <label>邮箱</label>
                		    <input type="email" class="form-control" name="email" placeholder="请填写邮箱">
                		  </div>
                		  <div class="form-group">
                		    <label>请选择爱好</label>
                		    <div>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="足球" name="hobbies"> 足球
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="篮球" name="hobbies"> 篮球
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="烫头" name="hobbies"> 烫头
                		    	</label>
                		    </div>
                		  </div>
                		  <button type="submit" class="btn btn-primary">添加用户</button>
                		</form>
                	</div>
                </body>
                </html>
            `;
            res.end(add)
        } else if (pathname == '/modify') {
            let user = await User.findOne({ _id: query.id });
            let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '打豆豆']
                // console.log(user);
                // console.log(user.name);
                //呈现修改用户界面
            let modify = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>修改用户</h3>
                    <form method="post"  action="/modify?id=${user._id}">
                      <div class="form-group">
                        <label>用户名</label>
                        <input  name="name"  value="${user.name}" type="text"  class="form-control"   placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input value="${user.password}" type="password" class="form-control" name="password"  placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input value="${user.age}" type="text" class="form-control" name="age" placeholder="请填写年龄">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input value="${user.email}" type="email" class="form-control" name="email" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>                                       
            `;
            hobbies.forEach(item => {
                //判断当前循环项是否在用户的爱好数组里
                let isHobby = user.hobbies.includes(item);
                if (isHobby) {
                    console.log(item);
                    modify += `
                        <label class="checkbox-inline">
                            <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                        </label>
                    `;
                } else {
                    modify += `
                        <label class="checkbox-inline">
                            <input type="checkbox" value="${item}" name="hobbies"> ${item}
                        </label>
                    `;
                }
            });
            modify += `
                </div>
                      </div>
                      <button type="submit" class="btn btn-primary">修改用户</button>
                    </form>
                </div>
            </body>
            </html>`
            res.end(modify);
        } else if (pathname == '/remove') {
            await User.findByIdAndDelete({ _id: query.id });
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        }
    } else if (method == 'POST') {
        //用户添加功能
        if (pathname == '/add') {
            //接受用户提交的信息
            let formData = '';
            //接受post参数
            req.on('data', param => {
                formData += param;
            });
            //post参数接收完毕
            req.on('end', async() => {
                let user = querystring.parse(formData);
                //将用户提交的信息添加到数据库中
                await User.create(user);
                //res.writeHead(301)重定向，状态码301
                res.writeHead(301, {
                    Location: '/list'
                });
                //重定向完一定要调用res.end,要不然当前请求不会结束，也不会去跳转
                res.end();
            });
        } else if (pathname == '/modify') {
            //修改信息
            //接受用户提交的信息
            let formData = '';
            //接受post参数
            req.on('data', param => {
                formData += param;
            });
            //post参数接收完毕
            req.on('end', async() => {
                let user = querystring.parse(formData);
                //将用户提交的信息添加到数据库中
                await User.updateOne({ _id: query.id }, user);
                //res.writeHead(301)重定向，状态码301
                res.writeHead(301, {
                    Location: '/list'
                });
                //重定向完一定要调用res.end,要不然当前请求不会结束，也不会去跳转
                res.end();
            });
        }
    }
});
//监听端口
app.listen(3000);