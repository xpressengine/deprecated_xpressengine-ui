import gulp from 'gulp'
import plugins from 'gulp-load-plugins'

const $ = plugins()

gulp.task('default', ['sass'])

gulp.task('sass', () => {
  return gulp.src('./src/scss/*.scss')
    .pipe($.sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass'])
})
