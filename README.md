gulp-jshtml
======
[![Node](https://img.shields.io/david/sw4/gulp-jshtml.svg?style=flat-square)]
[![Dependency Status](https://img.shields.io/david/sw4/gulp-jshtml.svg?style=flat-square)](https://david-dm.org/sw4/gulp-jshtml)
[![devDependency Status](https://img.shields.io/david/dev/sw4/gulp-jshtml.svg?style=flat-square)](https://david-dm.org/sw4/gulp-jshtml#info=devDependencies)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/sw4/gulp-jshtml/blob/master/LICENSE-MIT.md)
[![Issues](https://img.shields.io/github/issues/sw4/gulp-jshtml.svg?style=flat-square)](https://github.com/sw4/gulp-jshtml/issues)
[![Release](https://img.shields.io/github/release/sw4/gulp-jshtml.svg?style=flat-square)](https://github.com/sw4/gulp-jshtml/releases)


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
