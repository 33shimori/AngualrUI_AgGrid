var gulp = require('gulp'),
				concat=require('gulp-concat'),
				sourcemaps = require('gulp-sourcemaps'),
				uglify = require('gulp-uglify'),
				ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function (){
	gulp.src(['ng/module.js', 'ng/**/*.js'])
					.pipe(concat('app.js'))
					.pipe(gulp.dest('assets'));
});

gulp.task('watch:js', function (){
		gulp.watch('ng/**.*js', ['js']);
});
