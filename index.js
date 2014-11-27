var through = require('through2'),
	gutil = require('gulp-util'),
	path = require('path'),
	PluginError = gutil.PluginError;
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
			function escape(s) {
				return ('' + s) /* Forces the conversion to string. */
					.replace(/\\/g, '\\\\') /* This MUST be the 1st replacement. */
					.replace(/\t/g, '\\t') /* These 2 replacements protect whitespaces. */
					.replace(/\n/g, '\\n')
					.replace(/\u00A0/g, '\\u00A0') /* Useful but not absolutely necessary. */
					.replace(/&/g, '\\x26') /* These 5 replacements protect from HTML/XML. */
					.replace(/'/g, '\\x27')
					.replace(/"/g, '\\x22')
					.replace(/</g, '\\x3C')
					.replace(/>/g, '\\x3E')
					;
			}	
			var location = escape(file.path),			
				compiled="\""+escape(String(file.contents).replace(/\r?\n|\r/g, "").replace(/\t/g, '').replace(/\s{2,}/g, ' ').trim())+"\"";			
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
