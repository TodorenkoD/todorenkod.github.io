'use strict';
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    browserSync = require('browser-sync').create(),
    debug = require('gulp-debug'),
    babel = require('gulp-babel'),
    bulkSass = require('gulp-sass-glob-import'),
    svgstore = require('gulp-svgstore'),
    isDevelopment = !process.env.NODE_ENV ||
        process.env.NODE_ENV === 'development';

const paths = {
    srcSass: 'src/sass/**/*.scss',
    srcCss: 'src/css',
    srcJs: 'src/js/script.js',
    srcJss: 'src/js/**/*.js',
    srcImg: 'src/img/**/*.*',
    srcFonts: 'src/fonts/**/*.*',
    srcHtml: 'src/html/index.html',
    srcHtmlAll: 'src/html/**/*.html',

    destCss: 'dist/css',
    destJs: 'dist/js',
    destImg: 'dist/img',
    destFonts: 'dist/fonts',
    destMain: 'dist',
};
//Collecting sass in to css, adding sourcemaps, concatenating files, adding prefixes, minifing file
gulp.task('sass', function() {
    return gulp.src(paths.srcSass).
        pipe(bulkSass()).
        pipe(gulpif(isDevelopment, sourcemaps.init())).
        pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['src/sass/tools/'],
        }).on('error', sass.logError)).
        pipe(concat('style.css')).
        pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true,
        })).
        pipe(cssnano()).
        pipe(gulpif(isDevelopment, sourcemaps.write('.'))).
        pipe(gulp.dest(paths.destCss));
});
//Collecting JS files by rigger, minifing
gulp.task('scripts', function() {
    return gulp.src(paths.srcJs).
        pipe(gulpif(isDevelopment, sourcemaps.init())).
        pipe(babel({
            presets: ['es2015']
        })).
        pipe(rigger()).
        pipe(concat('main.js')).
        // pipe(uglify()).
        pipe(gulpif(isDevelopment, sourcemaps.write('.'))).
        pipe(gulp.dest(paths.destJs));
});
//Collecting HTML files by rigger, minifing
gulp.task('markup', function() {
    return gulp.src(paths.srcHtml).
        pipe(rigger()).
        pipe(gulp.dest(paths.destMain));
});
//Sending fonts to dest folder
gulp.task('fonts', function() {
    return gulp.src(paths.srcFonts, {since: gulp.lastRun('fonts')}).
        pipe(gulp.dest(paths.destFonts));
});
//Minify images, caching images, sending images to dest folder
gulp.task('images', function() {
    return gulp.src(paths.srcImg, {since: gulp.lastRun('images')}).
        pipe(cache(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]}),
        ]))).
        pipe(debug({title: 'imagemin'})).
        pipe(gulp.dest(paths.destImg));
});
//Cleaning dest folder
gulp.task('clean', function() {
    return del(paths.destMain);
});
//Building project
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('images', 'fonts', 'sass', 'markup', 'scripts'))
);
//Watching for changes in source folders
gulp.task('watch', function() {
    gulp.watch(paths.srcSass, gulp.series('sass'));
    gulp.watch(paths.srcJss, gulp.series('scripts'));
    gulp.watch(paths.srcHtmlAll, gulp.series('markup'));
    gulp.watch(paths.srcImg, gulp.series('images'));
});
//Creating server
gulp.task('server', function() {
    browserSync.init({
        server: paths.destMain,
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});
//Default task for starting development
gulp.task('default',
    gulp.series('build', gulp.parallel('server', 'watch'))
);
