var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass');
    gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    svgo = require('imagemin-svgo'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

gulp.task('default', ['jade', 'sass', 'autoprefixer', 'cssmin', 'watch']);


gulp.task('jade', function  () {
	gulp.src(['./src/jade/*.jade', '!./src/jade/_*.jade'])
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./build/'))
});


gulp.task('sass', function () {
    return sass('src/sass/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('src/css/'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css/prefix/'));
});

 
gulp.task('cssmin', function () {
    gulp.src('src/css/prefix/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('svg', function () {
    return gulp.src('src/img/*.svg')
        .pipe(svgo()())
        .pipe(gulp.dest('build/assets/img/'));
});

gulp.task('watch', function  () {
	gulp.watch('src/jade/*.jade', ['jade']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['autoprefixer']);
	gulp.watch('src/css/prefix/*.css', ['cssmin']);
    gulp.watch('src/img/', ['svg'])
});
