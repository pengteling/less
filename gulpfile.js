
var gulp = require('gulp');
// npm i browser-sync
/*实时监测 浏览器实时变化*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    var files = [
        '*.html',
        'css/**/*.css',
        'js/**/*.js',
        'images/**/*.{png,jpg,jpeg,svg,gif,ico}'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});


// gulp.task('html', function() {
//     return gulp.src('./*.html')
//         //.pipe(gulp.dest('dist'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });
// gulp.watch("./*.html", ['html']);


// gulp.task('css', function() {
//     return gulp.src('./css/*.css')
//         //.pipe(gulp.dest('dist'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });
// gulp.watch("./*.html", ['html']);

var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber'); //防止gulp退出进程
gulp.task('less', function() { 
    return gulp.src('./less/**/*.less')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./css'))
      // .pipe(browserSync.reload({
      //            stream: true
      //        }));
  });

gulp.watch("less/**/*.less", ['less']);  // ./less路径 不监控 新增加的，如果去掉 ./ 则可以监控 less中新增加的less文件改动

gulp.task('default',['less','browser-sync']);