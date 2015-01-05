gulp-svg2el
======

[![Build Status](https://img.shields.io/travis/sw4/gulp-svg2el.svg?style=flat-square)](https://travis-ci.org/sw4/gulp-svg2el)
[![Dependency Status](https://img.shields.io/david/sw4/gulp-svg2el.svg?style=flat-square)](https://david-dm.org/sw4/gulp-svg2el)
[![devDependency Status](https://img.shields.io/david/dev/sw4/gulp-svg2el.svg?style=flat-square)](https://david-dm.org/sw4/gulp-svg2el#info=devDependencies)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/sw4/gulp-svg2el/blob/master/LICENSE-MIT.md)
[![Issues](https://img.shields.io/github/issues/sw4/gulp-svg2el.svg?style=flat-square)](https://github.com/sw4/gulp-svg2el/issues)
[![Release](https://img.shields.io/github/release/sw4/gulp-svg2el.svg?style=flat-square)](https://github.com/sw4/gulp-svg2el/releases)
[![Status](https://badge.fury.io/gh/sw4%2Fgulp-svg2el.png)](https://github.com/sw4/gulp-svg2el)
[![NPM](https://badge.fury.io/js/gulp-svg2el.png)](https://www.npmjs.org/package/gulp-svg2el)

Gulp plugin to convert passed HTML to Javascript

`$ npm install gulp-svg2el`

Usage
---
```javascript
svg2el = require('gulp-svg2el'),
gulp.task('svg2el', function() {
	return gulp.src('src/**/*.svg')
        .pipe(svg2el())        
        .pipe(gulp.dest('dist/'))		
});
```

####Considerations

The plugin escapes all relevant characters in the source HTML, collapses tabs / whitespace into a single space and trims the result to output a valid SVG DOM element.

-----------------------------------------

<sup>[gulp-svg2el](https://github.com/sw4/gulp-svg2el), written by [SW4](https://github.com/sw4) for use in the [OpenUI](https://github.com/open-ui/open-ui) project, www.ouijs.org.</sup>
