# jq 事件

```js
$("selector").事件类型(function() {
  // ...
});
```

## 鼠标

> 注意区分鼠标和焦点

- 单击：click
- 双击 dblclick
- 鼠标按下：mousedown
- 鼠标松开：mouseup
- 鼠标移入：mouseenter
- 鼠标移出：mouseleave
- 移入移出组合：hover

  ```js
  $("#p1").hover(
    function() {
      alert("你进入了 p1!");
    },
    function() {
      alert("拜拜! 现在你离开了 p1!");
    }
  );
  ```

- 鼠标在 DOM 内部移动：mousemove
- 滚动指定的元素时：scroll，适用于所有可滚动的元素和 window 对象（浏览器窗口）

## 键盘

- 键盘按下时：keydown
- 键盘松开时：keyup
- 按下一个按键，并产生一个字符时：keypress

  ```js
  $(window).keypress(function(event) {
    // 通过event.which可以拿到按键代码；如果是keypress事件，则拿到ASCII码
  });
  ```

## 其他事件

- 文档加载完毕后：ready，需要用`$(document)`
- 调整浏览器窗口大小时：resize，需要用`$(window)`
- 获取焦点：focus
- 失去焦点：blur
- 元素值发生改变：change，多用于文本类元素，比如 input 元素
- 被选中：select，只能用于 textarea 或文本类型的 input

- 提交表单：submit

  ```js
  $("button").click(function() {
    $("form").submit();
  });
  ```

  - 阻止表单提交

    ```js
    $("form").submit(function(event) {
      event.preventDefault();
      // 或者return false;
    });
    ```

## event 对象

- 事件类型：`even.type`
- 确定鼠标事件和键盘事件键值：`event.whitch`
- 事件的命名空间：`event.namespace`
- **事件正在执行的节点**：`event.target`
- **事件绑定的节点**，与 this 值始终相等：`event.currentTarget`
- **阻止事件冒泡**：`event.stopPropagation()`
- **阻止事件的默认行为**：`event.preventDefault()`
- 事件被触发的一个事件处理程序的最后返回值：`event.result`

## 事件绑定与取消

- 绑定一个或多个事件

  ```js
  $("img").on({
    click: function(event) {
      console.log("a");
    },
    mouseenter: function(event) {
      console.log("b");
    }
  });
  ```

- 取消绑定一个或多个事件：`off("event",selector,fn)`
- 绑定一次性的事件：`one("event",selector,fn)`
