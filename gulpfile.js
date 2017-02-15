
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
gulp.task('less', function() { 
    return gulp.src('./less/**/*.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.reload({
                 stream: true
             }));
  });

gulp.watch("./less/**/*.less", ['less']);

gulp.task('default',['browser-sync']);