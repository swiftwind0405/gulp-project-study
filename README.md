# gulp-project-study

> gulp 是一个自动化工具，前端开发者可以使用它来处理常见任务：       
> * 搭建web服务器
> * 文件保存时自动重载浏览器
> * 使用预处理器如Sass、LESS
> * 优化资源，比如压缩CSS、JavaScript、压缩图片

## 安装 Gulp
> node.js 环境
1. 全局安装 gulp
```
npm install gulp –g
```
2. 安装依赖
```
npm install gulp –save-dev
```

## 项目初始化
**如果没有配置文件：**
1. 创建package.json文件（手动创建或者命令行创建，`npm init` 输入相关信息）
2. 发现没有gulp这个时候就需要输入，v然后出现一个node_modules/文件夹
```
npm install gulp –save-dev
```

**如果有配置文件，直接输入：**
```
npm install
```

## 创建任务
根目录下创建一个gulpfile.js的文件

### 默认任务

```
gulp.task('default',function(){})
```

回调函数也可以通过数组来定义

```
gulp.task('default',['function1','function2'])
```

### 任务

```
gulp.task('task-name',function(){
    return gulp.src('source-files')
        .pipe(aGulpPlugin())
        .pipe(gulp.dest('destination'))
});
```

一个真实的任务有两个额外的事件`gulp.src`和`gulp.dest`。`gulp.src`告诉Gulp任务，所要使用的文件。`gulp.dest`告知当任务完成后，Gulp输出文件的地址。

**gulp 基础**
> gulp.src()方法可以帮助我们找出将要处理的文件，然后pipe()去处理这些找到的文件。pipe()可以理解为管道，每个管道就可以指定它的功能，最后我们再使用gulp.dest()方法把处理好的文件放到指定的地方，

## 插件
### gulp-file-include
> 提供一个`include`方法来把公共的部分分离出去，模块化

例如文件结构：

```
|-node_modules
|-src // 生产环境的 html 存放文件夹
    |-include // 公共部分的 html 存放文件夹
    |-*.html 
|-dist // 编辑后的 html 文件
```

**gulpfile.js**

```
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
    gulp.src('src/**.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});
```

html中把要用到的，例如`header.html`给`include`进来:

```
@@include('include/header.html)
```
带`*`代表插件未研究
### gulp-pug*
> pug的编译

### gulp-sass*
> sass的编译

### gulp-sourcemaps*
> 源码追踪

### gulp-autoprefixer*
> 自动添加css浏览器兼容的前缀

### gulp-cssnano*
> 压缩css

### gulp-babel*
> 编译ES6

### gulp-concat*
> 合并js

### gulp-uglify*
> 压缩js

### gulp-plumber*
> 管道工，报错不停止服务

### browser-sync*
> 提供多端同步的服务器 https://browsersync.io/docs/options

### http-proxy-middleware*
> 代理中间件 https://github.com/chimurai/http-proxy-middleware
