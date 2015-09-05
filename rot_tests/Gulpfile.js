'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var replace = require('gulp-replace');
var eslint = require('gulp-eslint');

var paths = {
    babel: 'Resources/**/*.es6',
    atomify: './vendor.js',
    lint: 'Resources/**/*.{es6,js}'
};

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('lint', function () {
    return gulp.src(paths.lint)
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

// We want to run all the .es6 files through babel first, before we browserify them
gulp.task('babel', ['lint','copy-files'], doBabel);
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
        .pipe(sourcemaps.init())
        .pipe(babel({
            blacklist: ['strict'], // atomic doesn't like use strict in all cases.  If you want it, add it to the es6 file and it will carry over.
            "only": ["*.es6"],
            "optional": ["es7.classProperties"]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./build/Resources"));
}
