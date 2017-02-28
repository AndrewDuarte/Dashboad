//Calling in Gulp famework
var gulp = require('gulp');

//Calling in Gulp plugins
var minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');


//Terminal example of gulp
gulp.task('name-task', function(){
	console.log('Wow, gulp is cool!');
});


//Minifying HTML file task
gulp.task('minify-html', function() {
  return gulp.src('./tmp/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});


//Minifying css file task
gulp.task('minify-css',function(){
	return gulp.src('./tmp/style.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist'))
});

////Minifying js file task
gulp.task('minify-js', function () {
    gulp.src('./tmp/myjs.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});


//Image optomisation
gulp.task('minify-image', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);