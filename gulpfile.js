const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

//WE DEFINED A RANDOM TASK NAMES 'STYLES' 
gulp.task('styles', () => {
    return gulp.src('public/scss/app.scss')      //SRC = PATH OF THE FILES JINHE COMPILE KRNA H (IN OUR CASE, * SCSS FILES KO)
    .pipe(sass({outputStyle: "compressed"}))           //KIS JANGUAGE KO COMPILE KRNA H
    .pipe(gulp.dest('public/css'))     //COMPILED FILES KAHA PE STORE KLRNI H
})


//WATCH THE CHANGES AND AUTOMATICALLY UPDATE KARDO
gulp.task('watch', () => {
    return gulp.watch('public/scss/app.scss', (done) => {        //KISE WATCH
        gulp.series(['styles'])(done)       //KIN KIN TASKS KO WATCH KRNA H 
    });

})

gulp.task('minifyjs', () => {
    return gulp.src('public/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('public/js'))
})