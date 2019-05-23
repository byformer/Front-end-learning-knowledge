# Sass

## 安装

1. 先安装 Ruby（ 下载地址：https://rubyinstaller.org/downloads/ ）
2. 再安装 Sass( https://sass-lang.com/ ) 和 Compass( http://compass-style.org/ )
3. 常用命令：

   ```js
   gem install sass // 安装Sass，如果mac下输入这个命令时没有权限，则需要在前面加上 sudo

   gem update sass // 更新sass

   gem sources --remove https://rubygems.org/ // 移除自带的下载源

   gem sources -a https://gems.ruby-china.com // 设置为淘宝的下载源，速度更快

   gem sources -l // 查看下载源是否是淘宝的

   gem isntall compass // 安装compass

   gem update compass // 更新compass

   compass create CompassDemo // 通过 Compass 创建工程目录

   compass watch // copass watch编译sass文件（在CompassDemo目录下）

   sass-convert main.scss main.sass // main.scss 转为 main.sass
   ```

## 介绍

1. CSS 仅仅是一个标记语言，不是编程语言，因此不可以自定义发量、不可以引用等等。面对这些问题，我们现在来引入 Sass，简单的说，他是 css 的升级版，可以自定义变量、可以有 if 语句、可以嵌套等等

2. Compass 框架

   > 参考：https://blog.csdn.net/weixin_41424247/article/details/79008402

   - sass 目录存放的是开发源文件的目录，默认生成 ie.scss, print.scss, screen.scss（通常都不需要，可以删除），通常存放 scss 或者 sass 格式的文件（注意不要同时存在这两种文件）
   - stylesheets 目录是编译生成 css 文件的默认输出地址，默认生成 ie.css, print.css, screen.css（可以删除）
   - config.rb 是该项目的配制文件，通过它可以配制出自己想要的输出模式和结构

## 关系

> Less/Sass 是语法、Compass 是框架、CSS 是目标

## 使用

> 参考：http://www.ruanyifeng.com/blog/2012/06/sass.html

- `$`符号来声明变量，我们新建一个文件`_variables.scss`，这个文件专门用来存放变量，然后在其他的文件中引入`_variables.scss` 即可。因为这个文件只需要存储变量，并不需要它编译出对应的 css 文件，所以我们给文件名的前面加了下划线，意思是声明为局部文件

  ```scss
  // _variables.scss
  $font1: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
  $font2: Arial, Verdana, Helvetica, sans-serif;

  // 新建文件main.scss
  @ import "variables.scss"; // 引入变量文件
  .div1 {
    font-family: $font1;
  }
  .div2 {
    font-family: $font2;
  }

  // 结果：main.css
  .div1 {
    font-family: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
  }
  .div2 {
    font-family: Arial, Verdana, Helvetica, sans-serif;
  }
  ```

- 引入：`@import "文件路径"`

  - 如果该文件本身是`_文件名.scss`（一般用于放共用的变量），那么这个文件不会编译成`.css`文件，因为它放的是共用的东西，没必要编译成`.css`
  - 为了防止覆盖问题，最好加一个`!default;`，比如：在`_文件名.scss`中，`$color-1: red !default;`，表示 color-1 变量默认是红色，如果有冲突将会被覆盖
  - 为了防止覆盖问题，`@import "文件名"`最好放在头部
  - 一般来说，`@import "文件名"`只有一个

- 运算

  ```scss
  .div {
    font: (10px/8px);
    font: (10px * 8);
    width: $width/2;
    height: (500px/2);
    margin-left: 5px + 8px/2px;
  }

  // 结果.css
  .div {
    font: 1.25;
    font: 80px;
    width: 150px;
    height: 250px;
    margin-left: 9px;
  }
  ```

- mixin 声明了一个混合宏（**重用代码块**）

  ```scss
  @mixin helloMixin {
    display: inline-block;
    font: {
      size: 20px;
      weight: bold;
    }
    color: red;
  }
  .div {
    @include helloMixin; /* @include 引入一个混合宏 */
  }

  // 结果.css
  .div {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: red;
  }
  ```

  ```scss
  // 其他形式

  /*嵌套minin*/
  @mixin helloMixin2 {
    padding: 10px;
    background-color: red;
    @include helloMixin;
  }

  /*参数minin及默认参数*/
  @mixin sexy-border($color: red, $width) {
    border: {
      color: $color;
      width: $width;
      style: dashed;
    }
  }
  .p {
    @include sexy-border(blue, 10px);
  }
  ```

- 继承：`@extend` 类似于逗号选择器（**很常用**）

  ```scss
  /*简单继承*/
  .div1 {
    border: 1px #f00;
    background-color: #fdd;
  }
  .divext {
    @extend .div1;
    border-width: 3px;
  }

  // 结果.css
  .div1,
  .divext {
    border: 1px #f00;
    background-color: #fdd;
  }

  .divext {
    border-width: 3px;
  }
  ```

- 嵌套：类似后代选择器（**很常用**）

  ```scss
  .div1 {
    width: $width;
    height: $width;
    background-color: $color;
    .div-inner {
      width: $width;
      height: $width;
      background-color: $color;
      a {
        color: red;
      }
    }
  }
  // 结果.css
  .div1 {
    width: 300px;
    height: 300px;
    background-color: #ffe932;
  }
  .div1 .div-inner {
    width: 300px;
    height: 300px;
    background-color: #ffe932;
  }
  .div1 .div-inner a {
    color: red;
  }

  /* 伪类的嵌套 */
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  // 结果.css
  a:hover {
    text-decoration: underline;
  }
  ```

- 条件和循环

  ```scss
  $type: "tony";
  /* @if */
  p {
    @if $type == "bufy" {
      color: blue;
    } @else if $type == "tim" {
      color: red;
    } @else if $type == "tony" {
      color: green;
    } @else {
      color: black;
    }
  }
  // 结果.css
  p {
    color: green;
  }

  /*while*/
  $i: 6;
  @while $i > 0 {
    .item-#{$i} {
      width: 1px * $i;
    }
    $i: $i - 2;
  }
  // 结果.css
  .item-6 {
    width: 6px;
  }
  .item-4 {
    width: 4px;
  }
  .item-2 {
    width: 2px;
  }

  /*@for through*/
  @for $i from 1 through 3 {
    .item-#{$i} {
      width: 1px * $i;
    }
  }
  // 结果.css
  .item-1 {
    width: 1px;
  }
  .item-2 {
    width: 2px;
  }
  .item-3 {
    width: 3px;
  }

  /*@for to*/
  @for $i from 1 to 3 {
    .item-#{$i} {
      width: 1px * $i;
    }
  }
  // 结果.css
  .item-1 {
    width: 1px;
  }
  .item-2 {
    width: 2px;
  }

  /*@for list*/
  $list: (1, 2, 3, 4, 5);
  @for $i from 1 through length($list) {
    .item-#{$i} {
      width: 1px * $i;
    }
  }
  // 结果.css
  .item-1 {
    width: 1px;
  }
  .item-2 {
    width: 2px;
  }
  .item-3 {
    width: 3px;
  }
  .item-4 {
    width: 4px;
  }
  .item-5 {
    width: 5px;
  }

  /*each，类似于for*/
  $map: (
    top: 1px,
    left: 2px,
    bottom: 3px,
    right: 4px
  );
  .div {
    @each $key, $value in $map {
      #{$key}: $value;
    }
  }
  // 结果.css
  .div {
    top: 1px;
    left: 2px;
    bottom: 3px;
    right: 4px;
  }
  ```

- 内置函数

  ```scss
  /*number*/
  $number: 70;
  $number2: 71;
  $numberPercent: 7;
  $numberRound: 25.9;
  .div {
    zoom: percentage($numberPercent);

    zoom: round($numberRound);

    zoom: ceil($numberRound);

    zoom: floor($numberRound);

    zoom: abs($number);

    zoom: min($number, $number2);

    zoom: max($number, $number2);

    zoom: random(20);
  }
  // 结果.css
  .div {
    zoom: 700%;
    zoom: 26;
    zoom: 26;
    zoom: 25;
    zoom: 70;
    zoom: 70;
    zoom: 71;
    zoom: 14;
  }

  /*string*/
  $string: "hello";
  .div {
    background-image: unquote($string);

    background-image: quote($string);

    background-image: str-length($string);

    background-image: str-insert($string, "a", 2);

    background-image: str-index($string, "e");

    background-image: to-upper-case($string);

    background-image: to-lower-case($string);
  }
  // 结果.css
  .div {
    background-image: hello;
    background-image: "hello";
    background-image: 5;
    background-image: "haello";
    background-image: 2;
    background-image: "HELLO";
    background-image: "hello";
  }

  /*list*/
  // 下标从1开始
  $list: (1, 2, 3, 4, 5);
  .div {
    zoom: length($list);

    zoom: nth($list, 1);

    zoom: set-nth($list, 1, "x");

    zoom: join($list, (6, 7, 8));

    zoom: append($list, 6);

    zoom: index($list, 1);
  }
  // 结果.css
  .div {
    zoom: 5;
    zoom: 1;
    zoom: "x", 2, 3, 4, 5;
    zoom: 1, 2, 3, 4, 5, 6, 7, 8;
    zoom: 1, 2, 3, 4, 5, 6;
    zoom: 1;
  }

  /*map*/
  $map: (
    top: 1px,
    left: 2px,
    bottom: 3px,
    right: 4px
  );
  .div {
    width: map-get($map, left);

    @debug map-remove($map, left); /* @debug 在控制台打印结果 */

    width: map-keys($map);

    width: map-values($map);

    width: map-has-key($map, top);
  }
  // 结果.css
  .div {
    width: 2px;
    width: top, left, bottom, right;
    width: 1px, 2px, 3px, 4px;
    width: true;
  }

  /*自定义函数*/
  $rem1: 100px;
  @function px2rem($px) {
    $rem: 37.5px;
    @return ($px / $rem) + rem;
  }
  .div {
    width: px2rem(20px);
  }
  // 结果.css
  .div {
    width: 0.53333rem;
  }
  ```

## 技巧

- 多属性

  ```scss
  // 可以写成
  border: {
    top: 1px solid red;
    bottom: 1px solid green;
  }
  ```

- `#{$变量名}` 字符串插值

  ```scss
  $str: "hello.jpeg";
  .div1 {
    background-image: url("./img/#{$str}");
  }
  // 结果.css
  .div1 {
    background-image: url("./img/hello.jpeg");
  }
  ```

- Sass 的变量作用域：基于`{ }`

- 注释

  - 标准的 CSS 注释 `/* comment */` ，会保留到编译后的文件
  - 单行注释 `// comment`，只保留在 SASS 源文件中，编译后被省略

- 伪类/伪元素：比如`&::after`，`&`表示其父级
