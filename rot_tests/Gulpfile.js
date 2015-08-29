'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babel = require("gulp-babel");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var replace = require('gulp-replace');

var paths = {
    babel: 'Resources/**/*.es6',
    atomify: './vendor.js'
};

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

// We want to run all the .es6 files through babel first, before we browserify them
gulp.task('babel', ['copy-files'], doBabel);
gulp.task('babel-watch', doBabel);
gulp.task('atomify', ['copy-files'], doAtomify);
gulp.task('atomify-watch', doAtomify);

gulp.task('copy-files', ['clean'], function () {
    return gulp.src(['*.atomic', './Resources/**', '!**/*.es6'], {
            base: './'
        })
        .pipe(gulp.dest('./build'));
});

gulp.task('transform-spritesheets', ['copy-files'], function () {
    // This is necessary because the spritesheets exported from Leshy Spritesheet Tool (http://www.leshylabs.com/apps/sstool/) are not formatted in a way that
    // Atomic Game Engine can read... the casing is wrong.
    return gulp.src(['./Resources/Sprites/*.xml'], {
            base: './'
        })
        .pipe(replace(/textureatlas/ig, 'TextureAtlas'))
        .pipe(replace(/subtexture/ig, 'SubTexture'))
        .pipe(replace(/imagepath/ig, 'imagePath'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch(paths.babel, ['babel-watch']);
    gulp.watch(paths.atomify, ['atomify-watch']);
});

gulp.task('default', ['babel', 'atomify', 'transform-spritesheets']);

// --------------------------------------------------------------------
function doAtomify() {

    if (paths.atomify) {
        // set up the browserify instance on a task basis
        var b = browserify({
            entries: paths.atomify,
            ignoreMissing: false
        });

        return b.bundle()
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./build/Resources/Modules'));
    }
}

function doBabel() {
    return gulp.src(paths.babel)
        .pipe(babel({
            blacklist: ['strict'], // atomic doesn't like use strict in all cases.  If you want it, add it to the es6 file and it will carry over.
            "sourceMaps": true,
            "only": ["*.es6"],
            "optional": ["es7.classProperties"],
        }))
        .pipe(gulp.dest("./build/Resources"));
}
