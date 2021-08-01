//引用gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
// const { hasMagic } = require('glob');
var uglify = require('gulp-uglify');
//用gulp.task建立任务
//任务名称，回调函数
gulp.task('first', done => {
    console.log('第一个gulp任务');
    //1.使用gulp. src获取要处理的文件
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));
    done();
});
// html任务
// 1.html文件中代码的压缩操作 gulp-htmlmin
// 2.抽取html文件中的公共代码
gulp.task('htmlmin', htmlm => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        //压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
    htmlm();
});
// Css任务
// 1.less语法转换
// 2.css代码压缩
gulp.task('cssmin', cssm => {
    //选择css目录下的所有less文件以及css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //将less语法转换为css语法
        .pipe(less())
        //将css代码进行压缩
        .pipe(csso())
        //将处理的结果进行输出
        .pipe(gulp.dest('dist/css'));
    cssm();
});
//js任务
//1.es6代码转换
//2.代码压缩
gulp.task('jsmin', jsm => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    jsm();
});
//复制文件夹
gulp.task('copy', co => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'));
    co();
});
//构建任务，当一个任务执行时，其他任务都会跟着执行
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy', function(done) {
    done();
}));