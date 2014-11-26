gulp-jshtml
======

Gulp plugin to convert passed HTML streams to Javascript


Usage
---
```javascript
jshtml = require('gulp-jshtml'),
gulp.task('jshtml', function() {
	return gulp.src('src/**/*.html', {
            base: './'
        })
        .pipe(jshtml({
        	varname:"templates"
        }))        
        .pipe(gulp.dest('dist/'))		
});
```


Options
---
`varname` (Optional) Namespace for HTML files to be added to, defaults to `jshtml[]`, e.g. the content of `C:\MyPath\MyDirectory\MyFile.html` is set to `jshtml[MyFile]`
