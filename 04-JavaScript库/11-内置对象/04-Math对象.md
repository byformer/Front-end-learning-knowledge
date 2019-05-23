# Math 对象

> Math 不需要再去实例化，直接使用

## 1、常见方法

- `Math.min(num1,num2...numN)` 求一组数中的最小值
- `Math.mimaxn(num1,num2...numN)` 求一组数中的最大值

- `Math.ceil(num)` 向上取整，即直接进 1 位

- `Math.floor(num)` 向下取整，即舍弃小数

- `Math.round(num)` 四舍五入

- `Math.abs(num)` 求绝对值

- `Math.random()` 返回 [0,1] 之间的一个随机数

  ```js
  // 应用：求 [x,y] 之间的随机整数
  Math.floor(Math.random() * (y - x + 1) + x);
  ```
