# jq 动画

## 内置动画

> [ ]表示可选，time 单位以毫秒，缓动函数表示动画曲线函数（"linear" 和 "swing"），回调函数表示动画完毕后要执行的函数

1. 显隐效果

   - 显隐效果：`show([time],[缓动函数],[回调函数])`和`hide([time],[缓动函数],[回调函数])`，原理改变 display 属性为 none 来实现
   - 组合使用：`toggle([time],[缓动函数],[回调函数])`

2. 滑动

   > 原理：设置 display: none 属性

   - 滑动：向上`slideUp([time],[缓动函数],[回调函数])`和向下`slideDown([time],[缓动函数],[回调函数])`
   - 组合使用：`slideToggle([time],[缓动函数],[回调函数])`

3. 淡入淡出

   > 原理：改变透明度

   - 淡入淡出：0~1`fadeIn([time],[缓动函数],[回调函数])`和 1~0`fadeOut([time],[缓动函数],[回调函数])`
   - 组合使用：`fadeToggle([time],[缓动函数],[回调函数])`
   - 特定透明度：`fadeTo(time,opacity,[缓动函数],[回调函数])`

## 自定义动画

> **要实现动画中的移动效果，必须 CSS 的 position 属性设置为 relative、fixed 或 absolute**

1. 基本语法：`$(selector).animate({params},time,callback);`

   - params 参数定义形成动画的 CSS 属性

   ```js
   $("button").click(function() {
     $("div").animate({ left: "250px" });
   });
   ```

2. 操作多个属性

   ```js
   $("button").click(function() {
     $("div").animate({
       left: "250px",
       opacity: "0.5",
       height: "150px",
       width: "150px"
     });
   });
   ```

3. 队列功能

   > 多个 animate() 调用/链式调用，jQuery 会创建包含这些方法调用的"内部"队列，然后逐一运行这些 animate 调用

   ```js
   $("button").click(function() {
     $("div")
       .animate({ left: "100px", opacity: "0.4" }, "slow")
       .animate({ fontSize: "3em", opacity: "0.8" }, "slow");
   });
   ```

## 停止

- 基本语法：`stop([stopAll],[goToEnd])`

  - stopAll：是否应该清除动画队列。默认是 false，即仅清除当前队列的动画，允许后面队列的动画继续执行
  - goToEnd：是否立即完成当前队列动画。默认是 false

  ```js
  // 默认时，清除在被选元素上指定的当前队列的动画
  $("#flip").click(function() {
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function() {
    $("#panel").stop();
  });
  ```

  ```js
  // stopAll为true，所有队列全部清除；goToEnd为true，直接到达最后一个队列的状态
  $("#button_start").click(function() {
    $("div")
      .animate({ left: "100px" }, "slow")
      .animate({ fontSize: "3em" }, "slow");
  });
  $("#button_stop").click(function() {
    $("div").stop(true, true);
  });
  ```

## 其他

- 延时：`delay(time)`
- 判断元素是否处于动画状态：`is(':animated')`

## 计时器（效率较低）

- 延时执行：`setTimeout()`
- 周期性执行：`setInterval()`
