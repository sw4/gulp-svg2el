var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-jshtml';
function gulpJshtml(options) {
    return through.obj(function(file, enc, callback){
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
		options.invoke=options.invoke || 'jshtml';
        if (file.isBuffer()) {    		
			var location = file.path,			
				compiled="\""+String(file.contents).replace(/([^"\\]*(?:\\.[^"\\]*)*)"/g, "$1\\\"").replace(/\r?\n|\r/g, "").replace(/\t/g, '').replace(/\s{2,}/g, ' ').trim()+"\"";
			compiled=options.invoke+"("+compiled+", \""+location+"\");";
			file.contents = new Buffer(compiled);  
            this.push(file);
			console.log(location+ " COMPILED");
            return callback();
        }else{
			this.emit('error', new PluginError({
                plugin: 'JSHTML',
                message: 'The passed file cannot be compiled.'
            }));
            return callback();		
		}
    });	
};
module.exports = gulpJshtml;
