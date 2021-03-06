var gulp = require('gulp');
var	jshint = require('gulp-jshint');
var	jscs = require('gulp-jscs');
var	util = require('gulp-util');

gulp.task('vet', function(){
	 log('analizong code with jshint and jscs');
	 return gulp
	 			.src(['./src/**/*.js', './*.js'])
	 		 	.pipe(jscs())
	 		 	.pipe(jshint())
	 		 	.pipe(jshint.reporter('jshint-stylish', {vebose: true}));
});

function log(msg){
	if (typeof(msg) === 'object'){
		for (var item in msg){
			if (msg.hasOwnProperty(item)){
				util.log(util.colors.blue(msg[item]));
			} 
		}
	} else {
		util.log(util.colors.blue(msg));
	}
}