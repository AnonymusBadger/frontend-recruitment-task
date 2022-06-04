const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();

// File paths
const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
};

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS
        .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('dist')
        ); // put final CSS in dist folder
}

function jsTask() {
    return src([
        files.jsPath
    ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist')
        );
}

var cbString = new Date().getTime();
function cacheBustTask() {
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

function watchTask() {
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8000,
        ui: {
            port: 8080
        }
    });

    watch([files.scssPath, files.jsPath, "./index.html"],
        parallel(scssTask, jsTask)).on('change', browserSync.reload);
};

const useAs = "dev";

switch (useAs) {
    case "dev":
        exports.default = series(
            parallel(scssTask, jsTask),
            cacheBustTask,
            serve,
        );
        break;
    case "watch":
        exports.default = series(
            parallel(scssTask, jsTask),
            cacheBustTask,
            watchTask,
        );
        break;
    case "build":
        exports.default = series(
            parallel(scssTask, jsTask),
            cacheBustTask,
        );
        break;
}
