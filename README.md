gulp-jshtml
======

Gulp plugin to convert passed HTML streams to Javascript


Use
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
