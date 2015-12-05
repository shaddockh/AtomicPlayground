'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    del = require('del'),
    config = require('./Gulpfile.config.json'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    replace = require('gulp-replace');

var tsProject = tsc.createProject('tsconfig.json');

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
    // may be obsolete
    // return gulp.src(['*.atomic', 'UserPrefs.json', 'BuildSettings.json', './Resources/**', '!**/*.ts'], {
    //         base: './'
    //     })
    //     .pipe(gulp.dest('./build'));
});


// /**
//  * Generates the app.d.ts references file dynamically from all application *.ts files.
//  */
//  gulp.task('gen-ts-refs', function () {
//      var target = gulp.src(config.appTypeScriptReferences);
//      var sources = gulp.src([config.allTypeScript], {read: false});
//      console.log(target);
//      console.log(sources);
//      return target.pipe(inject(sources, {
//          starttag: '//{',
//          endtag: '//}',
//          transform: function (filepath) {
//              return '/// <reference path="..' + filepath + '" />';
//          }
//      })).pipe(gulp.dest(config.typings));
//  });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('lint', function () {
    return tsProject.src()
           .pipe(tslint())
           .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {

    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(tsc(tsProject));

    return tsResult.js.pipe(gulp.dest(tsProject.options.outDir));

    // var sourceTsFiles = [config.allTypeScript, //path to typescript files
    //     config.libraryTypeScriptDefinitions
    // ]; //reference to library .d.ts files
    // console.log(sourceTsFiles);
    // var tsResult = gulp.src(sourceTsFiles)
    //     .pipe(tsc(tsProject));
    //
    // tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    // return tsResult.js
    //     .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
    var typeScriptGenFiles = [
        tsProject.options.outDir + '/**/*.js', // path to all JS files auto gen'd by editor
        '!' + tsProject.options.outDir + '/lib'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('watch', function () {
    gulp.watch(tsProject.options.files, ['lint', 'compile-ts']);
    //gulp.watch(config.stubVendorFile, ['atomify-watch']);
});

gulp.task('default', ['clean', 'lint', 'compile-ts', 'atomify']);

// --------------------------------------------------------------------
function doAtomify() {

        var b = browserify({
            entries: './vendor.js',
            ignoreMissing: false
        });

        return b.bundle()
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./Resources/Modules'));
}

function doAtomifyExpiremental() {
  if (config.vendorModules && config.vendorModules.length > 0) {
    for (var i = 0; i < config.vendorModules.length; i++ ) {
      var b = browserify({
        ignoreMissing: false
      });

      //b.add(require(config.vendorModules[i]));
      b.add(config.vendorModules[i]);
      console.log(config.vendorModules[i]);
      //b.require(config.vendorModules);
      //b.ignore('Atomic');
      return b.bundle()
       .pipe(buffer())
       .pipe(gulp.dest('./Resources/Modules'));

    }
  }
}
