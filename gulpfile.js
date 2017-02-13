const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const minifyJs = require('gulp-uglify');
const rename = require('gulp-rename');
const maps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const shell = require('gulp-shell');

gulp.task("compileSass", () => {
    return gulp.src("_sass/main.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(maps.write("./"))
        .pipe(gulp.dest("css/dist"));
    });
gulp.task("concatStyles", ["compileSass"], () => {
    return gulp.src(['css/vendor/prism.css', 'css/dist/styles.css'])
        .pipe(maps.init())
        .pipe(concat("styles.css"))
        .pipe(maps.write("./"))
        .pipe(gulp.dest("css/dist"));
    });
gulp.task("minifyStyles", ["concatStyles"], () => {
    return gulp.src("css/dist/styles.css")
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest("css/dist"));
    });
gulp.task("concatScripts", () => {
    return gulp.src(['js/vendor/matchHeight.js', 'js/myNav.js', 'js/myWaypoint.js', 'js/main.js'])
        .pipe(maps.init())
        .pipe(concat("index.js"))
        .pipe(maps.write("./"))
        .pipe(gulp.dest("js/dist"));
    });
gulp.task("minifyScripts", ["concatScripts"], () => {
    gulp.src("js/dist/index.js")
        .pipe(minifyJs())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest("js/dist"));
    });

/**
 * Build the Jekyll Site
**/
gulp.task('jekyll-build', shell.task(['bundle exec jekyll build --drafts']));

/**
 * Rebuild Jekyll & reload
**/
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
    browserSync.reload();
});

/**
 * Build jekyll then start server
 * Remove html extensions
 * Redirect to 404 page when url is not found
**/
gulp.task('browser-sync', ['jekyll-build'], () => {
    browserSync({
        server: {
            baseDir: '_site',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        port: 4000
    }, (err, bs) => {
        bs.addMiddleware("*", (req, res, next) => {
            if(!req.url.includes("/blog/archive/")){
                res.writeHead(302, {
                    "location": "/404.html"
                });
                res.end("Redirecting!");
            }  else {
                next();
            }

        });
    });
});

/**
 * Dev Task:
 * Watch for any changes in the _sass folder and rebuild
 * Watch for any changes in the main.js file and rebuild
 * Watch for any changes in root, _layout and _posts html files and rebuild
**/
gulp.task('watch', ['browser-sync'], () => {
    gulp.watch('_sass/*.scss', ['minifyStyles', 'jekyll-rebuild']);
    gulp.watch('js/*.js', ['minifyScripts', 'jekyll-rebuild']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task: Run all css and js tasks, build jekyll
**/
gulp.task('default', ['minifyStyles', 'minifyScripts', 'jekyll-build']);
