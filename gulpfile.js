var gulp = require('gulp'),
	jade = require('gulp-jade');

// gulp.task('default', function() {
	
// });

gulp.task('jade', function  () {
	gulp.src(['./src/jade/*.jade', '!./src/jade/_*.jade'])
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./build/'))
});