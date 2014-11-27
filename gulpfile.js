var gulp = require('gulp'),
    pkg = require('./package.json'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }),
    banner = ['/**',
        ' * <%= pkg.title || pkg.name %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @copyright (c)<%= new Date().getFullYear() %> <%= pkg.author.name %>',
        ' * @license <%= pkg.licenses[0].type %> (<%= pkg.licenses[0].url %>)',
        ' */',
        ''
    ].join('\n');

gulp.task('build:js', function() {
    return gulp.src('index.js', {
            base: './'
        })
        .pipe(plugins.plumber())
		.pipe(plugins.jsbeautifier())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('index.js', ['build','bump']);
    return true;
});

gulp.task('bump', function() {
    return gulp.src('./package.json')
        .pipe(plugins.plumber())
        .pipe(plugins.bump({
            type: 'patch'
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('default', ['watch']);
gulp.task('travis', ['build:styles', 'build:js']);
