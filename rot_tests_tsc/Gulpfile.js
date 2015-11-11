'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./Gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json');

var config = new Config();

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
});


gulp.task('default', ['lint', 'compile-ts']);
