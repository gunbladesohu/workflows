var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var browserify = require('gulp-browserify');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();

var coffeeSource =['components/coffee/tagline.coffee'];

var jsSource=[
'components/scripts/pixgrid.js',
'components/scripts/rclick.js',
'components/scripts/tagline.js',
'components/scripts/template.js'
]

var jsSource_old=[
'js/bootstrap.min.js',
'js/jquery.slim.min.js',
'js/tether.min.js',
'js/scripts.js'
]

var imageSource='images/**/*'
var HP_source ='HPlusSport_Start/**/*'

var cssSource_old=[
'css/bootstrap.min.css'
]

var htmlSource='./*.html'

var htmlJquerySource='./jquery/**/*'

var bkaSource='./JavaScript_NT/**/*'

var cssSource='./*.css'

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




// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "builds/development"
        }
    });
});

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


gulp.task('html',function(){
	gulp.src(htmlSource)
	.pipe(gulp.dest('builds/development/'))
	.pipe(connect.reload());
});

gulp.task('htmlJquery',function(){
	gulp.src(htmlJquerySource)
	.pipe(gulp.dest('builds/development/jquery/'))
	.pipe(connect.reload());
});

gulp.task('bka',function(){
	gulp.src(bkaSource)
	.pipe(gulp.dest('builds/development/bka/'))
	.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src(cssSource)
	.pipe(gulp.dest('builds/development/'))
	.pipe(connect.reload());
});

gulp.task('images',function(){
	gulp.src([imageSource], { "base" : "." })
	.pipe(gulp.dest('builds/development/'))
	.pipe(connect.reload());
});

gulp.task('hp',function(){
	gulp.src([HP_source], { "base" : "." })
	.pipe(gulp.dest('builds/development/'))
	.pipe(connect.reload());
});

gulp.task('js_old',function(){
	gulp.src(jsSource_old)
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload());
});

gulp.task('css_old',function(){
	gulp.src(cssSource_old)
	.pipe(gulp.dest('builds/development/css'))
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
	gulp.watch(bkaSource, ['bka']);
	gulp.watch(coffeeSource, ['coffee']);
	gulp.watch(jsSource, ['js']);
	gulp.watch(sassSource_all, ['compass']);
	gulp.watch(htmlSource, ['html']);
	gulp.watch(htmlJquerySource, ['htmlJquery']);
	gulp.watch(cssSource, ['css']);
	gulp.watch(imageSource, ['images']);
	gulp.watch(HP_source, ['hp']);
    gulp.watch(htmlSource, browserSync.reload);
})




gulp.task('default', ['bka','hp','html','htmlJquery','css','browser-sync','images','css_old','js_old','coffee','js','compass','connect','watch']);