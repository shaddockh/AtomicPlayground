'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./Gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    replace = require('gulp-replace');

var config = new Config();

/**
 * Clean out the build folder
 */
gulp.task('clean', function (cb) {
    del(['build'], cb);
});

/**
 * Generate the vendor.js file based upon the requires contained within the
 * vendor.js stub located in the root of the project
 */
gulp.task('atomify', ['copy-files'], doAtomify);
gulp.task('atomify-watch', doAtomify);

/**
 * Copy all of the non typescript files into the build directory
 */
gulp.task('copy-files', ['clean'], function () {
    return gulp.src(['*.atomic', 'UserPrefs.json', 'BuildSettings.json', './Resources/**', '!**/*.ts'], {
            base: './'
        })
        .pipe(gulp.dest('./build'));
});

/**
 * Post-processes the spritesheet
 * This is necessary because the spritesheets exported from Leshy Spritesheet Tool (http://www.leshylabs.com/apps/sstool/) are not formatted in a way that
 * Atomic Game Engine can read... the casing is wrong.
 */
gulp.task('transform-spritesheets', ['copy-files'], function () {
    return gulp.src(['./Resources/Sprites/*.xml'], {
            base: './'
        })
        .pipe(replace(/textureatlas/ig, 'TextureAtlas'))
        .pipe(replace(/subtexture/ig, 'SubTexture'))
        .pipe(replace(/imagepath/ig, 'imagePath'))
        .pipe(gulp.dest('./build'));
});

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
 gulp.task('gen-ts-refs', function () {
     var target = gulp.src(config.appTypeScriptReferences);
     var sources = gulp.src([config.allTypeScript], {read: false});
     console.log(target);
     console.log(sources);
     return target.pipe(inject(sources, {
         starttag: '//{',
         endtag: '//}',
         transform: function (filepath) {
             return '/// <reference path="..' + filepath + '" />';
         }
     })).pipe(gulp.dest(config.typings));
 });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript, //path to typescript files
        config.libraryTypeScriptDefinitions
    ]; //reference to library .d.ts files
    console.log(sourceTsFiles);
    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
    var typeScriptGenFiles = [
        config.tsOutputPath + '/**/*.js', // path to all JS files auto gen'd by editor
        config.tsOutputPath + '/**/*.js.map', // path to all sourcemap files auto gen'd by editor
        '!' + config.tsOutputPath + '/lib'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('watch', function () {
    gulp.watch([config.allTypeScript], ['lint', 'compile-ts']);
    gulp.watch(config.stubVendorFile, ['atomify-watch']);
});

gulp.task('default', ['clean', 'lint', 'compile-ts', 'atomify', 'transform-spritesheets']);

// --------------------------------------------------------------------
function doAtomify() {

    if (config.stubVendorFile) {
        // set up the browserify instance on a task basis
        var b = browserify({
            entries: config.stubVendorFile,
            ignoreMissing: false
        });

        return b.bundle()
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./build/Resources/Modules'));
    }
}
