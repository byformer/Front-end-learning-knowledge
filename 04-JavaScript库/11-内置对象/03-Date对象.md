# Date 对象

## 1、Date 方法

1. Date 对象的创建

   ```js
   new Date();
   ```

2. 获取 Date

- `getFullYear()` 年 - **4 位数**

- `getMonth()` 月 - **0~11（0 代表 1 月）**

- `getDate()` 日 - **1~31**

- `getDay()` 星期几 - **0~6（0 代表周日）**

- `getHours()` 时 - **0-23**

- `getMinutes()` 分 - **0-59**

- `getSeconds()` 秒 - **0-59**

- `getMilliseconds()` 毫秒

- `getTime()` 时间戳 - **指的是从格林威治标准时间的 1970 年 1 月 1 日 0 时 0 分 0 秒到当前日期所花费的毫秒数**

代码举例：

```js
var myDate = new Date();
console.log(myDate); // 打印结果：Tue Apr 09 2019 15:31:03 GMT+0800 (中国标准时间)

console.log(myDate.getFullYear()); // 打印结果：2019
console.log(myDate.getMonth()); // 打印结果：3
console.log(myDate.getDate()); // 打印结果：9
console.log(myDate.getDay()); // 打印结果：2
console.log(myDate.getHours()); // 打印结果：15
console.log(myDate.getMinutes()); // 打印结果：31
console.log(myDate.getSeconds()); // 打印结果：3
console.log(myDate.getMilliseconds()); // 打印结果：344
console.log(myDate.getTime()); // 打印结果：1554795063344
```

**利用时间戳检测代码的执行时间**：

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。

3.设置 Date

- `setFullYear()` 年 - **4 位数**

- `setMonth()` 月 - **0~11（0 代表 1 月）**

- `setDate()` 日 - **1~31**

- `setHours()` 时 - **0-23**

- `setMinutes()` 分 - **0-59**

- `setSeconds()` 秒 - **0-59**

- `setTime()` 时间戳
