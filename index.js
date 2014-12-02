/**
 * gulp-jshtml
 * @version v0.0.11
 * @link http://github.com/sw4/gulp-jshtml
 * @copyright (c)2014
 * @license MIT (http://github.com/sw4/gulp-jshtml/raw/master/LICENSE-MIT.md)
 */
var through = require('through2'),
    gutil = require('gulp-util'),
    path = require('path'),
    PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-jshtml';

function gulpJshtml(options) {
    options = options || {};
    return through.obj(function(file, enc, callback) {
        if (file.isNull() || file.isDirectory()) {
            this.push(file);
            return callback();
        }
        if (file.isStream()) {
            this.emit('error', new PluginError({
                plugin: 'JSHTML',
                message: 'Streams are not supported.'
            }));
            return callback();
        }
        options.invoke = options.invoke || 'jshtml';
        if (file.isBuffer()) {
            var stream = String(file.contents),
                location = "'" + file.path.replace(/\\/g, "/") + "'",
                compiled = stream.replace(/(?:\r\n|\r|\n)/g, '').replace(/[\\']/g, "\"").replace(/[\\"']/g, '\\$&').replace(/\t/g, '').replace(/\s{2,}/g, ' ').trim();
            compiled = options.invoke + "(" + location + ", \'" + compiled + "\');";
            file.contents = new Buffer(compiled);
            this.push(file);
            console.log(location + " COMPILED");
            return callback();
        } else {
            this.emit('error', new PluginError({
                plugin: 'JSHTML',
                message: 'The passed file cannot be compiled.'
            }));
            return callback();
        }
    });
}
module.exports = gulpJshtml;
