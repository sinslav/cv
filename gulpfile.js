var gulp = require('gulp'),
jade = require('gulp-jade'),
sass = require('gulp-ruby-sass');
gulp = require('gulp'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename');

gulp.task('default', ['jade', 'sass', 'cssmin', 'watch']);

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
 
gulp.task('cssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('watch', function  () {
	gulp.watch('./src/jade/*.jade', ['jade']);
    gulp.watch('./src/sass/*.scss', ['sass']);
	gulp.watch('src/css/*.css', ['cssmin']);
});
