/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var gulp=require("gulp"),
        del=require("del"),
        sass=require("gulp-sass"),
        scssLint=require("gulp-scss-lint"),
        scssLintStylish=require("gulp-scss-lint-stylish"),
        cleanCSS=require("gulp-clean-css"),
        rename=require("gulp-rename"),
        sourcemaps=require("gulp-sourcemaps");

gulp.task("styles", function(){
    return gulp.src("styles/sass_file.scss")
            .pipe(scssLint({customReport: scssLintStylish}))
            .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(rename({
                basename: "styles",
                suffix: ".min"
            }))
            .pipe(cleanCSS())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("css"));
});



