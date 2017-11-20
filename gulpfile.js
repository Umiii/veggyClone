'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    browsersync = require('browser-sync').create();

/* Compile Sass Task */
gulp.task("compileSass", function(){
    return gulp.src("scss/app.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'))
        .pipe(browsersync.stream());
});

/* Watch task using browser sync
* for hot reload
* */
gulp.task("watch", function () {

    browsersync.init({
        server: "./"
    });

    gulp.watch('scss/**/*.scss',['compileSass']).on('change', browsersync.reload);
});

gulp.task("serve", ["watch"]);