var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var webserver = require('gulp-webserver');

gulp.task('default', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/js/index.js',
    debug: false,
  });

  return b.bundle()
    .on('error', function(err) {
            gutil.log(err);
            this.emit('end');
        })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./app/'));
});

gulp.task('run', ['watch', 'webserver']);

gulp.task('watch', function () {
  // set up the browserify instance on a task basis
  var b = watchify(browserify({
    entries: './app/js/index.js',
    debug: false,
  }));

    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal

  function bundle() {
      return b.bundle()
           .on('error', function(err) {
                   gutil.log(err);
                   this.emit('end');
           })
         .pipe(source('bundle.js'))
         .pipe(buffer())
         .pipe(gulp.dest('./app/'));
  }

   bundle();
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
    }));
});