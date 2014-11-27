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
        	invoke:"templates"
        }))        
        .pipe(gulp.dest('dist/'))		
});
```

####Considerations

The plugin escapes all relevant characters in the source HTML, collapses tabs / whitespace into a single space and trims the result.

####Options
`invoke` 

(Optional) Function to invoke, passed compiled HMTL and template location. Defaults to `jshtml`. e.g. the content of `C:\MyPath\MyDirectory\MyFile.html` is passed to `jshtml(compiledHTML, 'C:\MyPath\MyDirectory\MyFile.html')`

####Example

######Gulp

```javascript

gulp.src('myDirectory\myFile.html', {
  .pipe(jshtml({
      invoke:"templates.push"
  }))  
```

######HTML (of `myDirectory\myFile.html`)

```html
<div id='myDiv' class='myDiv-css'>
       Some content here...can be {anything}	   
</div>
```
######Output JS
```javascript
templates.push("<div id='myDiv' class='myDiv-css'>Some content here...can be {anything}</div>", "myDirectory\myFile.html");
```
