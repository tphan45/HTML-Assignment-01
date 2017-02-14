const gulp = require('gulp');

const conf = require('../conf/gulp.conf');

gulp.task('fonts', fonts);

function fonts() {
    return gulp.src([
        conf.path.bower('bootstrap/fonts/**/*'), 
        conf.path.bower('font-awesome/fonts/**/*'),
        conf.path.src('fonts/**/*')])
        .pipe(gulp.dest(conf.path.tmp('fonts')))
        .pipe(gulp.dest(conf.path.dist('fonts')))
}
