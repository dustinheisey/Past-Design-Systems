var gulp = require("gulp");
const { watch } = require("gulp");

function generateCSS() {
    const postcss = require("gulp-postcss");

    return gulp.src("src/**/*.css").pipe(postcss()).pipe(gulp.dest("build/"));
}

function watchFiles() {
    watch("src/**/**.css", generateCSS);
}

exports.watch = watchFiles;
