# Vue-常见的知识点

## 模板语法

文本

```html
<span>{{ msg }}</span>
```

原始 HTML

```html
<span v-html="hello world"></span>
```

特性

```html
<div :id="test-1"></div>
```

表达式

```html
{{ number + 1 }} {{ ok ? 'yes' : 'no' }} {{ message.split('') }}
```

指令

```html
<p v-if="seen">你看到我了吗？</p>
```

修饰符

```html
<form @submit.prevent="onSubmit">...</form>
```

## 计算属性

应用场景：具有依赖关系的数据监听

## 类与样式

对象语法：适合较多的 class 或动态的 class（**用得更多**）
数组语法：适合较少的 class 名

## 条件与列表渲染

基础用法：if else、for
分组用法：复杂模板的分组条件处理方式（写到 template 中，多个 li 使用）

## 事件

定义与缩写
事件的传参与事件对象
事件修饰符

## 组件

props
slot 插槽
自定义事件
