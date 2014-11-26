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
        .pipe(jshtml())        
        .pipe(gulp.dest('dist/'))		
});
```


Options
---
`varname` = Namespace for HTML files to be added to, defaults to `jshtml[]`
