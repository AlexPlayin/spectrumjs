var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var rename = require('gulp-rename');
var include = require("gulp-include");
var watch = require('gulp-watch');
var batch = require('gulp-batch');


gulp.task('build', function () {
    return gulp
        .src('./js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(size())
        .pipe(include())

    .pipe(rename({
            extname: '.min.js'
        }))
        .on('error', console.log)
        .pipe(gulp.dest('./build/'))
        .pipe(gulp.dest('./build/testing'));
});

gulp.task('watch', function () {
    watch('./js/*.*', batch(function (events, done) {
        gulp.start('build', done);
    }));
});
