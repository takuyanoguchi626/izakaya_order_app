"use strict";

var { src, watch, dest, series } = require("gulp");
var sass = require("gulp-sass")(require("sass"));

const sassBuild = (done) => {
  src("./src/styles/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(dest("./src/styles/css"));
  done();
};

const watchScss = () => {
  watch("./src/styles/sass/**/*.scss", sassBuild);
};

exports.default = series(sassBuild, watchScss);
exports.build = sassBuild;
