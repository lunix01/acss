const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');

const paths = {
    less: './resources-src/less/**/*.less'
};

gulp.task('less', () => {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(cssmin({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./resources/css/'))
});

gulp.task('watch', () => {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.vendor, ['vendor']);
});
gulp.task('default', ['less', 'watch']);
