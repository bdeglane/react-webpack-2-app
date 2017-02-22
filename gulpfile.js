const gulp = require('gulp');
const webserver = require('gulp-webserver');

// simple webserver
gulp.task('server', function () {
    gulp.src('./src/static/')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:8080/',
            port: 8080,
            fallback: 'index.html'
        }));
});