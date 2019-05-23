# BOM

> 浏览器对象模型

## 1、window 对象

所有的全局变量和全局方法，都归于 window 对象上

### 1.1、属性

- `window.innerWidth`：获取**文档显示区**的宽度
- `window.innerHeight`：获取**文档显示区**的高度

### 1.2、方法

- alert：显示带有一段消息和一个确定按钮的警告框
- confirm：显示一个带有指定信息、确定和取消按钮的对话框，返回布尔值
- prompt：`window.prompt(a,b)`，a 表示信息提示文本(可选)，b 表示默认输入的文本(可选)，取消返回 null，确定返回输入的文本字符串。（注意：换行使用\n）
- open：`window.open(子窗口URL,窗口名,窗口参数且各参数用逗号隔开)`，打开一个新的浏览器窗口或查找一个已命名的窗口

  ```js
  open(
    "https://live.bilibili.com/21268485",
    "新窗口名称",
    "width = 400,height = 200"
  );
  ```

- close：`window.close()`，关闭当前窗口
- 定时器

  - 超时调用：setTimeout
    `setTimeout(要执行的函数或代码串,指定的毫秒数)`，在指定毫秒数之后调用函数或表达式，返回一个 ID

    ```js
    var call = function() {
      alert("2秒之后调用我");
    };
    setTimeout(call, 2000);
    ```

  - 清除超时调用：clearTimeout
    `clearTimeout(setTimeout返回的ID)`

    ```js
    var call = function() {
      alert("2秒之后调用我");
    };
    var idOfSetTimeout = setTimeout(call, 2000);
    clearTimeout(idOfSetTimeout);
    ```

  - 间歇调用：setInterval
    `setInterval(要执行的函数或代码串,周期性执行的时间间隔)`，每隔指定时间执行一次代码

    ```js
    var call = function() {
      console.log("每隔2秒调用我一次");
    };
    setInterval(call, 2000);
    ```

  - 清除间歇调用：clearInterval
    `clearInterval(setInterval返回的ID)`

    ```js
    var call = function() {
      console.log("每隔2秒调用我一次");
    };
    var idOfSetInterval = setInterval(call, 2000);
    setTimeout(function() {
      clearInterval(idOfSetInterval);
    }, 10000); // 10秒时停止调用
    ```

## 2、location 对象

> 提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能，它既是 window 对象 的属性，也是 document 对象 的属性

### 2.1、属性

> 以下几个属性，没有则返回空字符串

- location.href
  返回当前页面的完整 URL

- location.hash
  返回 URL 中的 hash，#号开头，可用于获取锚链接的 id

- location.search
  返回 URL 的查询字符串，?开头

- location.host
  返回服务器名称和端口号

- location.hostname
  返回服务器名称

- location.port
  返回端口号

- location.pathname
  返回 URL 中的目录和文件名

- location.protocol
  返回页面使用的协议

### 2.2、方法

- replace：重新定向 URL，且不会在历史记录中生成新纪录（即不能回退）

  ```js
  var a = function() {
    location.replace("https://www.baidu.com/");
  };
  setTimeout(a, 2000); // 2秒后自动跳转至百度
  ```

- reload：重新加载当前页面

  - 情况一：`loaction.reload();`，若页面没有发生任何变化，则会从缓存中加载；否则从服务器重新加载
  - 情况二：`loaction.reload(true);`，强制从服务器重新加载

## 3、history 对象

> 保存了用户访问页面的历史记录

### 方法

- `history.back();`：回到历史记录的上一步，等同 `history.go(-1);`，也即浏览器的回退按钮

- `history.forward();`：回到历史记录的下一步，等同 `history.go(1);`，也即浏览器的前进按钮

- `history.go();`：历史记录的前后跳转，-n 步或+n 步

## 4、screen 对象

### 属性

- `screen.availWidth`：返回可用的**显示屏幕**宽度
- `screen.availHeight`：返回可用的**显示屏幕**高度

## 5、navigator 对象

### 属性

- `navigator.userAgent`：获取浏览器名称、版本、引擎、操作系统信息等内容

  ```js
  // 应用：判断浏览器类型

  function getBrowser() {
    var explorer = navigator.userAgent,
      browser;
    if (explorer.indexOf("MSIE") > -1) {
      browser = "IE";
    } else if (explorer.indexOf("Chrome") > -1) {
      browser = "Chrome";
    } else if (explorer.indexOf("Opera") > -1) {
      browser = "Opera";
    } else if (explorer.indexOf("Safari") > -1) {
      browser = "Safari";
    }
    return browser;
  }
  var browser = getBrowser();
  console.log("您当前使用的浏览器是：" + browser);
  ```
