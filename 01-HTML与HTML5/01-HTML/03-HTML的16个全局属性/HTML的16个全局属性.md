# HTML16 个全局属性

> 介绍：所有元素都可使用的属性
>
> 参考：https://xiaohuochai.site/HTML/grammar/grammar_attribute.html

## 常用属性

### class

- 作用：规定元素的一个或多个类名
- 值：多个类名用空格分隔
- 注意：类名不能以数字开头

### id

- 作用：规定元素的**唯一标识**
- 注意：若浏览器中出现多个相同 id 名的情况，CSS 样式对所以该 id 名的元素都生效，但 javascript 脚本仅对第一个（最上面那个）出现该 id 名的元素生效

### title

- 作用：规定关于元素的额外信息，鼠标移到元素上时显示一段提示文本

### lang

- 作用：规定元素内容的语言

```
en:英文
zh:中文
zh-CN：简体中文
```

### tabindex

- 作用：规定元素的 tab 键次序
- 值：number（1 是第一个）

```html
<!-- 用tab键进行切换 -->
<div>
  <a href="https://www.baidu.com" tabindex="3">百度</a>
  <a href="https://www.taobao.com" tabindex="2">阿里</a>
  <a href="https://www.qq.com" tabindex="1">腾讯</a>
</div>
```

### accesskey

- 作用：创建激活或聚焦元素的**快捷键**
- 值：一个键盘字符如 B
- 范围：支持该属性的元素有`<a>、<area>、<button>、<input>、<label>、<legend>、<textarea>`
- 注意：使用该属性可能在新窗口打开链接时可能会被浏览器屏蔽

```html
<!-- 快捷键(alt+b)可以跳转到百度；快捷键(alt+a)可以跳转到阿里；快捷键(alt+t)可以跳转到腾讯 -->
<div>
  <a href="https://www.baidu.com" accesskey="b">百度</a>
  <a href="https://www.taobao.com" accesskey="a">阿里</a>
  <a href="https://www.qq.com" accesskey="t">腾讯</a>
</div>
```

### draggable

- 作用：用户是否可以拖动元素
- 值：true/false/auto
- 注意：链接和图像默认是可拖动的

### contenteditable

- 作用：指定是否可以在浏览器里编辑内容
- 值：true/false
- 注意：设置 document.designMode ='on'时，页面的任意位置都可以编辑；使用 contenteditable ='true'则只对具体元素和其包含的元素起作用
- 移动端：移动端 ios5 以及 android3 之后才支持该属性

### data-\*

- 作用：用于存储页面或应用程序的私有定制数据
- 注意：属性名不应包含任何大写字母，且在前缀"data-"之后必须有至少一个字符；属性值可以是任意字符串
- 使用：可以在所有浏览器中使用 getAttribute 方法来获取 data-属性的值，也可以使用 javascript 中 dataset 属性访问 data-属性的值，不过 IE10-浏览器不支持 dataset
