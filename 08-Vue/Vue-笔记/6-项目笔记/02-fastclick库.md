# fastclick 的介绍和使用

## 移动端点击延迟事件

> 移动设备上的浏览器默认会在用户点击屏幕大约延迟 300 毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了 FastClick

## 解决方式

1. 禁用缩放

   - `<meta name = "viewport" content="user-scalable=no" >`

   - 缺点: 网页无法缩放

2. 更改默认视口宽度

   - `<meta name="viewport" content="width=device-width">`

   - 缺点: 需要浏览器的支持

3. css touch-action

   - touch-action 的默为 auto，将其置为 none 即可移除目标元素的 300 毫秒延迟
   - 缺点: 新属性，可能存在浏览器兼容问题

4. tap 事件

   - zepto 的 tap 事件，利用 touchstart 和 touchend 来模拟 click 事件
   - 缺点: 点击穿透

5. fastclick

   - 原理: 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即出发模拟一个 click 事件，并把浏览器在 300ms 之后真正的 click 事件阻止掉
   - 缺点: 脚本相对较大

## 选择 fastclick 方案

1. 安装：`npm install fastclick --save`
2. 在 main.js 中引入并绑定到 body

   ```js
   import FastClick from 'fastclick'

   FastClick.attach(document.body)
   ```

## 不需要使用 fastclick 的情况

1. FastClick 是不会对 PC 浏览器添加监听事件
2. Android 版 Chrome 32+浏览器，如果设置 viewport meta 的值为 width=device-width，这种情况下浏览器会马上出发点击事件，不会延迟 300 毫秒

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

3. 所有版本的 Android Chrome 浏览器，如果设置 viewport meta 的值有 user-scalable=no，浏览器也是会马上出发点击事件

4. IE11+浏览器设置了 css 的属性 touch-action: manipulation，它会在某些标签（a，button 等）禁止双击事件，IE10 的为-ms-touch-action: manipulation
