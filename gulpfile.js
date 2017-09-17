var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var browserify = require('gulp-browserify');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var coffeeSource =['components/coffee/tagline.coffee'];

var jsSource=[
'components/scripts/pixgrid.js',
'components/scripts/rclick.js',
'components/scripts/tagline.js',
'components/scripts/template.js'
]

var sassSource = ['components/sass/style.scss'];
var sassSource_all = [
'components/sass/style.scss',
'components/sass/_base.scss',
'components/sass/_minxins.scss',
'components/sass/_modules.scss',
'components/sass/_pixgrid.scss',
'components/sass/_rclick.scss',
'components/sass/_variables.scss',
];


// gulp.task('log', function(){
// 	gutil.log("workflow is awesome!");
// });
gulp.task('connect', function()
	{
		connect.server(
		{
			root: 'builds/development',
			livereload: true
		});
	});

gulp.task('coffee', function(){
	gulp.src(coffeeSource)
	.pipe(coffee({bare:true})
		.on('error',gutil.log))
	.pipe(gulp.dest('components/scripts'))
	;
});

gulp.task('js',function(){
	gulp.src(jsSource).pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload());
});

gulp.task('compass', function(){
	gulp.src(sassSource)
	.pipe(compass({
		style: 'expanded',
		sass:'components/sass',
		image:'builds/development/images'
	})
		.on('error',gutil.log))
	.pipe(gulp.dest('builds/development/css'))
	.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(coffeeSource, ['coffee']);
	gulp.watch(jsSource, ['js']);
	gulp.watch(sassSource_all, ['compass']);
})


gulp.task('default', ['coffee','js','compass','connect','watch']);