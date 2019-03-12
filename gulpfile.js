const gulp = require('gulp')
const pug = require('gulp-pug') // pug的编译
const sass = require('gulp-sass') // sass的编译
const sourcemaps = require('gulp-sourcemaps') // 源码追踪
const autoprefixer = require('gulp-autoprefixer') // 自动添加css浏览器兼容的前缀
const cssnano = require('gulp-cssnano') // 压缩css
const babel = require('gulp-babel') // 编译ES6
const concat = require('gulp-concat') //合并js
const uglify = require('gulp-uglify') // 压缩js
const plumber = require('gulp-plumber') // 管道工，报错不停止服务
const browserSync = require('browser-sync') // 提供多端同步的服务器 https://browsersync.io/docs/options
const reload = browserSync.reload // 自刷新
const proxy = require('http-proxy-middleware') //代理中间件 https://github.com/chimurai/http-proxy-middleware

// 源目录
const srcPath = 'src/'  //just test
const srcPathHtml = srcPath + 'views/';
const srcPathCss = srcPath + 'styles/';
const srcPathJs = srcPath + 'scripts/';
const srcPathStatic = srcPath + 'static/';

// 开发目录
const devPath = 'dev/';
const devPathHtml = devPath;
const devPathCss = devPath + 'css/';
const devPathJs = devPath + 'js/';
const devPathStatic = devPath + 'static/';

// 生产目录
const buildPath = 'dist/';
const buildPathHtml = buildPath;
const buildPathCss = buildPath + 'css/';
const buildPathJs = buildPath + 'js/';
const buildPathStatic = buildPath + 'static/';

/* 移动静态文件，不做任何处理 */
gulp.task('static', function() {
  gulp.src(srcPathStatic+'**')
      .pipe(gulp.dest(devPathStatic))
      .pipe(gulp.dest(buildPathStatic));
});

/* 压缩css */
gulp.task('cssmin',function() {
   gulp.src(srcPathCss+'*.scss')
       .pipe()
});