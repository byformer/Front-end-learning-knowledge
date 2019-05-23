# DOM

## 1、DOM 节点

### 获取（第一步）

- id：`getElementById()`
- 标签名：`getElementsByTagName()`
- 类名：`getElementsByClassName()`
- 返回第一个匹配的元素：`querySelector()`
- 返回全部匹配的元素：`querySelectorAll()`

### 通过"父子兄"关系获取

- 父：`节点.parentNode`
- 兄：
  - 前：`previousSibling`、`previousElementSibling`
  - 后：`nextSibling`、`nextElementSibling`
- 子：
  - 第一个：`firstChild`、`firstElementChild`
  - 最后一个：`lastChild`、`lastElementChild`
  - 所有：`childNodes`、`children`

### 插入

- 末尾插入：`父节点.appendChild(新的子节点)`
- 参考节点前插入一个新节点：`父节点.insertBefore(新的子节点, 参考的子节点)`
  - 若参考的子节点为 null，在最后插入新节点

### 替换

- 接受两个参数：`replaceChild(新节点, 被替换的节点)`

### 删除

- `父节点.removeChild(子节点) // 用父节点删除子节点`
  - `自己.parentNode.removeChild(自己)`：删除自己这个节点

### 复制

- `要复制的节点.cloneNode(可选参数) // 可选参数默认 false`
  - 不带参数：只复制节点本身，不复制子节点
  - 带参数 true：既复制节点本身，也复制其所有的子节点

### 创建

- 创建标签节点：`document.createElement("标签名")`
- 创建文本内容节点：`document.createTextNode("文本")`
- 创建文档片段节点：`document.createDocumentFragment("文档片段")`
- 创建注释节点：`document.createComment("注释")`
- 高效方法：`innerHTML // 双闭合标签里面的内容（包括里面的标签）`、`innerText // 双闭合标签里面的内容（不包括里面的标签）`

## 2、节点属性

### 获取

- `元素节点.getAttribute("属性名称")`

### 设置

- `元素节点.setAttribute(属性名, 新的属性值)`

### 删除

- `元素节点.removeAttribute(属性名)`

## 3、节点内容

- innerHTML：所有内容
- outerHTML：开始和结束标签
- innerText：所有文本内容
