/**
 * gulp-svg2el
 * @version v0.0.1
 * @link http://github.com/sw4/gulp-svg2el
 * @copyright (c)2015 
 * @license MIT (http://github.com/sw4/gulp-svg2el/raw/master/LICENSE-MIT.md)
 */
var through = require('through2'),
    gutil = require('gulp-util'),
    PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-svg2el';

function gulpSvg2el(options) {
    options = options || {};
    return through.obj(function(file, enc, callback) {
        if (file.isNull() || file.isDirectory()) {
            this.push(file);
            return callback();
        }
        if (file.isStream()) {
            this.emit('error', new PluginError({
                plugin: 'svg2el',
                message: 'Streams are not supported.'
            }));
            return callback();
        }
        options.invoke = options.invoke || 'svg2el';
        if (file.isBuffer()) {
            var stream = String(file.contents),
				compiled=stream.substr(stream.indexOf("<svg"), stream.length);
            file.contents = new Buffer(compiled);
            this.push(file);
            return callback();
        } else {
            this.emit('error', new PluginError({
                plugin: 'svg2el',
                message: 'The passed file cannot be compiled.'
            }));
            return callback();
        }
    });
}
module.exports = gulpSvg2el;
