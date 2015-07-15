'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var derequire = require('gulp-derequire');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

// We want to run all the .es6 files through babel first, before we browserify them
gulp.task('build', ['clean'], doBuild);
gulp.task('build-watch', doBuild);

gulp.task('watch', ['default'], function () {
    gulp.watch('./index.js', ['build-watch']);
});


gulp.task('default', ['build']);

// --------------------------------------------------------------------
function doBuild() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './index.js', standalone: 'atomic-blueprintLib'
    });

    return b.bundle()
        .pipe(source('atomic-blueprintLib.js'))
        .pipe(derequire())
        .pipe(gulp.dest('./dist'));
}

