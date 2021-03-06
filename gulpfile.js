  var gulp = require('gulp')
   // , plugins = require('gulp-load-plugins')
    , inject = require('gulp-inject')
    , sass = require('gulp-ruby-sass')
    , autoprefixer = require('gulp-autoprefixer')
    , wiredep = require('wiredep').stream
    , sequence = require('run-sequence')
    , angularFilesort = require('gulp-angular-filesort')
    , jshint = require('gulp-jshint')
    , shell = require('gulp-shell')
    , open = require('gulp-open');
    //, plugins = require('gulp-load-plugins');


    var PORT = 5111;

  gulp.task('default', function(){
    console.log('TESTS'.red.bold);
  });

  var jsFiles = ['./app/**/*.js'];

  var corsOptions = {
    origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  gulp.task('wire', function(){
    gulp.src('./index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('.'));
  });

  gulp.task('inject-css', function (){
    var target = gulp.src('./index.html');
    var sources = gulp.src('./styles/**/*.css', {read: false});
    return target.pipe(inject(sources))
      .pipe(gulp.dest('.'));
  });

  gulp.task('hint', function () {
      return gulp.src(jsFiles)
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
  });

  gulp.task('lint', function() {
    gulp.src('./app/**/*.js')
      .pipe(jshint({indent: 2}))
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('inject-js', function(){
    gulp.src('./index.html')
      .pipe(inject(
        gulp.src(jsFiles).pipe(angularFilesort())
      ))
      .pipe(gulp.dest('.'));
  });

  gulp.task('inject',  function(callback){
      sequence('inject-css', 'inject-js', callback);
  });

  gulp.task('sass', function() {
      return sass('./styles/sass/**/*.scss', { style: 'expanded' })
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
          .pipe(gulp.dest('styles/css/'));
  });


  gulp.task('watch-sass', function () {
      gulp.watch('./styles/sass/**/*.scss', ['sass']);
  });

  gulp.task('watch-js', function(){
    gulp.watch('./app/**/*.js', ['inject-js'])
  });


gulp.task('browser', function (callback) {
    sequence(['browser-server', 'browser-open' ], callback);
});

gulp.task('browser-server', shell.task([
    'node server.js'
]));

gulp.task('browser-open', false, function () {
    var options = {
        url : "http://localhost:5111/#/",
        app : "Google Chrome"
    };
    return gulp.src('./index.html')
        .pipe(open("", options));
});







