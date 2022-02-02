"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};


//paths.js = paths.webroot + "js/**/*.js";
//paths.minJs = paths.webroot + "js/**/*.min.js";

//path.scss = path.webroot + "css/source/site.scss";
//path.scssDist = path.webroot + "css/css/site.min.css";

//paths.css = paths.webroot + "css/**/*.css";
//paths.minCss = paths.webroot + "css/**/*.min.css";
//paths.concatJsDest = paths.webroot + "dist/site.min.js";
//paths.concatCssDest = paths.webroot + "dist/site.min.css";


gulp.task("scss", function () {
    return gulp.src('./wwwroot/css/source/site.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./wwwroot/dist'));
});

gulp.task("js", function () {
    return gulp.src('./wwwroot/js/site.js')
        .pipe(uglify())
        .pipe(gulp.dest('./wwwroot/dist'));
});




gulp.task("run", gulp.series(["scss", "js"]));