'use strict';

var gulp = require('gulp');
var through = require('through2');

function unique() {
  return gulp.src(['./src/./file.js', './src/./**/*.js'])
    .pipe(through.obj(function(file, _, cb) {
      console.log(file);
      cb(null, file);
    }))
    .pipe(gulp.dest('./dist'))
}

exports.default = unique;
