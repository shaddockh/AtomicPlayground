'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './';
        this.sourceApp = this.source + '/Resources';

        this.tsOutputPath = this.source + '/build/Resources';
        this.allJavaScript = [this.source + '/Resouces/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings';
        this.appTypeScriptReferences = this.typings + '/app.d.ts'
        this.libraryTypeScriptDefinitions = this.typings + '/**/*.ts';

        this.stubVendorFile = './vendor.js';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
