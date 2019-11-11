"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("less", function(done) {
  gulp.src('./project/less/style.less')
  	  .pipe(less())
  	  .pipe(postcss([
	      autoprefixer({browsers: [
	        "last 2 versions"
	      ]})
	    ]))
  	  .pipe(gulp.dest('./project/css'))
  	 done();
})