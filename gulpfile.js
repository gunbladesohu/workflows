var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');


var jsSource=[
'components/scripts/pixgrid.js',
'components/scripts/rclick.js',
'components/scripts/tagline.js',
'components/scripts/template.js'
]


// gulp.task('log', function(){
// 	gutil.log("workflow is awesome!");
// });
gulp.task('coffee', function(){
	gulp.src('components/coffee/tagline.coffee')
	.pipe(coffee({bare:true})
		.on('error',gutil.log))
	.pipe(gulp.dest('components/scripts'))
	;
});
gulp.task('js',function(){
	gulp.src(jsSource).pipe(concat('script.js'))
	.pipe(gulp.dest('builds/development/js'))
});
