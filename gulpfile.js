var gulp = require('gulp');

var server = require('browser-sync').create(); //执行函数返回对象


// const gulp = require('gulp');
const webserver = require('gulp-webserver');
const mockDataMiddleware = require('./data/mockDataMiddleware');

// gulp.task('default',function(){
//     console.log('hello gulp');
// });


// gulp.task('one',function(){
//     //one是一个异步执行的任务
//     setTimeout(function(){
//         console.log('one is done')
//     },3000);
// });

// //two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
// gulp.task('two',['one'],function(){
//     console.log('two is done');
// });




// gulp.task('one',function(done){ //done为任务函数提供的回调，用来通知任务已经完成
//     //one是一个异步执行的任务
//     setTimeout(function(){
//         console.log('one is done');
//         done();  //执行回调，表示这个异步任务已经完成
//     },5000);
// });

// //这时two任务会在one任务中的异步操作完成后再执行
// gulp.task('two',['one'],function(){
//     console.log('two is done');
// });



// gulp.task('mytask', function() {
//     gulp.src("./js/a.js")
//            .pipe(gulp.dest("./dist/"));
// });


gulp.task('server', function () {
    server.init({
        server: "./app",
        port: 3003 
    });
    // gulp.watch('./app/views/*.html').on('change',server.reload);//监听变化，执行刷新
    gulp.watch('./app/**').on('change', server.reload); //监听变化，执行刷新 

});


gulp.task('webserver', ()=>{
    gulp.src('./')//该文件夹是服务器的根路径
    .pipe(
      webserver({
        // host: '10.20.152.56',
        host: '192.168.0.102',
        port: '8080',
        livereload: true,//热更新
        directoryListing: true,//是否文件夹列表
        open: true,//打开浏览器
        // 中间件,拦截请求
        middleware: mockDataMiddleware
      })
    );
    // gulp.watch('./app/**').on('change', server.reload); //监听变化，执行刷新 
  });