var gulp = require("gulp"),
    uglify = require("gulp-uglify");
    cleanCSS = require("gulp-clean-css");
    imagemin = require("gulp-imagemin");
    htmlmin = require("gulp-htmlmin");
// Scripts Task
// Uglifies
gulp.task("scripts", function(){
  gulp.src("js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("minjs"));
  gulp.src("views/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("views/minjs"));
});

// Styles Task
// Minify css
gulp.task("styles", function() {
  gulp.src("css/*.css")
  .pipe(cleanCSS({compatibility: "ie8"}))
  .pipe(gulp.dest("mincss"));
  gulp.src("views/css/*.css")
  .pipe(cleanCSS({compatibility: "ie8"}))
  .pipe(gulp.dest("views/mincss"));
});

// Images Task
// Compress Images
gulp.task("image", function() {
  gulp.src("img/*")
  .pipe(imagemin())
  .pipe(gulp.dest("img"));
  gulp.src("views/images/*")
  .pipe(imagemin())
  .pipe(gulp.dest("views/images"));
});

// MTML Task
// Minify HTML
gulp.task("html", function() {
  gulp.src("index.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("html"));
  gulp.src("views/pizza.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("views/html"));
});

// Watch Task
// Watches js
gulp.task("watch", function() {
  gulp.watch("js/*.js", ["scripts"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);
