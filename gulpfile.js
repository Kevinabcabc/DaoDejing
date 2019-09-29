var gulp = require('gulp');

var server = require('browser-sync').create();//执行函数返回对象

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


gulp.task('server',function(){
    server.init({
        server:"./app",
        port:3003
    });
    // gulp.watch('./app/views/*.html').on('change',server.reload);//监听变化，执行刷新
    gulp.watch('./app/**').on('change',server.reload);//监听变化，执行刷新 
});