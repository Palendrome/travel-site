var gulp = require('gulp');
var watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default',function(){
	console.log("Hurray, you mad a gulp Task");
});

gulp.task('html', function() {
	console.log("imagine something useful here");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	
	
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});

