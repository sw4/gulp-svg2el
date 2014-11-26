var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var PluginError = gutil.PluginError;
// consts
const PLUGIN_NAME = 'gulp-jshtml';
// plugin level function (dealing with files)
function gulpJshtml(options) {
    return through.obj(function(file, enc, callback){
        // Pass file through if:
        // - file has no contents
        // - file is a directory
        if (file.isNull() || file.isDirectory()) {
            this.push(file);
            return callback();
        }
        // User's should be using a compatible glob with plugin.
        // Example: gulp.src('dir/**/*.{html,htm}').pipe(jshtml())
		/*
        if (['.html', '.htm'].indexOf(path.extname(file.path)) === -1) {
            this.emit('error', new PluginError({
                plugin: 'JSHTML',
                message: 'Supported formats include HTML and HTM only.'
            }));
            return callback();
        }
		*/
        // No support for streams
        if (file.isStream()) {
            this.emit('error', new PluginError({
                plugin: 'JSHTML',
                message: 'Streams are not supported.'
            }));
            return callback();
        }
        if (file.isBuffer()) {            
			var key = path.basename(file.path).replace('.html', '').replace('.htm', ''),
				varname=options && options.varname ? options.varname : 'jshtml';
				compiled=varname+"= "+varname+" ? "+varname+" : [];";
				key=key.indexOf(".")<0 ? key : key.substr(0,key.indexOf("."));
			compiled+=varname+"['"+key+"']=\""+String(file.contents).replace(/([^"\\]*(?:\\.[^"\\]*)*)"/g, "$1\\\"").replace(/\r?\n|\r/g, "").replace(/\t/g, '').replace(/\s{2,}/g, ' ').trim()+"\";";
            file.contents = new Buffer(compiled);  
            this.push(file);
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
// exporting the plugin main function
module.exports = gulpJshtml;
