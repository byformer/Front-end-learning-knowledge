# CSS 规范

> 本文仅介绍一般的 CSS 规范，具体仍以公司要求为准

## 1、命名规范

### 1.1、目录名

> 参考：https://xiaohuochai.site/CSS/grammar/grammar_namingConvention.html

- index.css：一般用于首页建立样式
- head.css：头部样，当多个页面头部设计风格相同时使用
- base.css：共用样式
- style.css：独立页面所使用的样式文件
- global.css：页面样式基础，全局公用样式，页面中必须包含
- layout.css：布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类页面中
- module.css：模块，用于产品类页，也可与其它样式配合使用
- master.css：主要的样式表
- columns.css：专栏样式
- themes.css：主体样式
- forms.css：表单样式
- mend.css：补丁，基于以上样式进行的私有化修补

### 1.2、类名

> BEM + 京东长类名
>
> 参考：https://xiaohuochai.site/CSS/grammar/grammar_CSSNamed.html

#### 布局

- header：头部
- container/wrap：容器
- nav：导航
- main：主栏
- side：侧栏
- footer：页脚

#### 通用部件

- list：列表
- item：列表项
- table：表格
- form：表单
- link：链接
- title：标题
- menu：菜单
- group：集合
- bar：条
- content：内容
- result：结果

#### 组件

- button(btn)：按钮
- icon：字体
- dropdown：下拉菜单
- toolbar：工具栏
- page：分页
- thumbnail：缩略图
- alert：警告框
- progress：进度条
- navbar：导航条
- nav ：导航
- subnav：子导航
- breadcrumb(crumb) ：面包屑
- label：标签
- badge：徽章
- jumbotron：巨幕
- panel：面板
- well：洼地
- tab：标签页
- tooltip：提示框
- popover：弹出框
- carousel：轮播图
- collapse ： 手风琴
- a-ffix；定位浮标

## 2、其他规范

### 2.1、样式顺序

1. 布局类：position, left, right, top, bottom, z-index，......
2. 盒模型类：display, float, width, height, margin, padding, border, border-radius，......
3. 文本类：font, color, background, line-height, text-align，......
4. 修饰类：color, background, list-style, transform, animation，......

```
.box {
    position: absolute;
    top: 0;
    left: 20%;
    z-index: 99;
    width: 100px;
    height: 100px;
    font-size: 20px;
    color:red;
    background-color: aqua;
}
```

### 2.2、“0”的单位

> 属性值为数字 0，不加任何单位（特殊情况除外）

```
.box {
    margin: 0 10px 20px 0;
}
```

### 2.3、颜色值表示

> 优先选用小写的十六进制

```
.box {
    color: #cccccc;
    background-color: #efefef;
}
```

### 2.4、引号

> 属性选择器或属性值用双引号 "" 括起来，而 url() 不要使用任何引号

```
.box {
    font-family: "open sans", arial, sans-serif;
    background-image: url(http://taobao.com/);
}
```

### 2.5、CSS 头部说明

```css
/**
 * @name: 文件名或模块名
 * @description: 文件或模块描述
 * @author: author-name(mail-name@qq.com)
 *          author-name2(mail-name2@qq.com)
 * @update: 2017-07-14 00:00
 */
```

### 2.6、CSS 代码缩进

> 建议缩进 2 个空格

## 3、编码技巧

> DRY、currentColor、inherit 和合理使用简写
>
> 参考：https://xiaohuochai.site/CSS/grammar/grammar_codingTech.html
