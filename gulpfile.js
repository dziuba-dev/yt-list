const gulp = require('gulp');
const partial = require('gulp-file-include');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const exec = require('child_process').exec;

gulp.task('css', function () {
    return gulp.src('src/**/*.css')
        .pipe(minify())
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('js', function() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('partial', function() {
    return gulp.src('src/index.html')
        .pipe(partial({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
    return gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('json', function () {
    return gulp.src('src/assets/*.json')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('run', gulp.series('css', 'js', 'partial', 'images', 'json'))

gulp.task('watch', function () {
    gulp.watch('src/assets/css/*.css', gulp.series('css'));
    gulp.watch('src/assets/js/**/*.css', gulp.series('js'));
    gulp.watch('src/**/*.html', gulp.series('partial'));
});

gulp.task('server', function (cb) {
    console.log(`server started at http://localhost:3000/`);
    exec('npm start', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('build', gulp.series('run', 'watch'));

gulp.task('default', gulp.series('run', 'server'));

