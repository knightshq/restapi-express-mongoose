var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');

gulp.task('transpile', () => (
	gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
));


gulp.task('start', () => (
	nodemon({
		script: 'dist/server.js',
		ext: 'js html',
		env: {'NODE_ENV': 'development'}
	})
));

gulp.task('default', ['transpile', 'start']);