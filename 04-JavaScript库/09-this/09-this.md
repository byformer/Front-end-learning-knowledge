# this

## 1、this 指向哪个对象？

> 根据函数的调用方式的不同，this 会指向不同的对象

1. 以**普通函数的形式**调用时，this 永远都是 **window**。比如`fun();`相当于`window.fun();`

   ```javascript
   var name = "哈哈";

   function fun() {
     console.log(this);
     console.log(this.name);
   }
   fun();
   // Window
   // 哈哈

   // 可以理解为：
   var window = {
     fun: function() {
       console.log(this);
       console.log(this.name);
     }
   };
   window.fun();
   ```

2. 以**对象的方法**的形式调用时，this 是**那个对象**

   ```js
   var abs = {
     name: "额额",
     fun: function() {
       console.log(this);
       console.log(this.name);
     }
   };

   abs.fun();
   // {name: "额额", fun: ƒ}，即Object，也即abs
   // 额额
   ```

3. 以**构造函数的形式**调用时，this 是**新创建的那个对象实例**（最常见）

   ```js
   function Fun() {
     this.name = "嘻嘻";
     this.hello = function() {
       console.log(this);
       console.log(this.name);
     };
   }
   var xiaoming = new Fun();
   xiaoming.hello();
   // xiaoming
   // 嘻嘻
   ```

4. call、apply、bind 可以改变 this 的指向

   ```js
   function yo(name, a, b) {
     console.log("yo，" + name + "，我是" + this.name + ",a:" + a + ",b:" + b);
   }

   var whh = {
     name: "王花花"
   };
   var lsd = {
     name: "李栓蛋"
   };

   yo.call(whh, "赵可爽", 1, 2); // 指定this指向whh，后边可以直接传参数“赵可爽”
   yo.call(lsd, "王大锤", 1, 2); // 指定this指向lsd，后边可以直接传参数"王大锤"
   yo.apply(lsd, ["王大锤", 1, 2]); // 跟call区别是：传参方式不同
   yo2 = yo.bind(lsd); // 与上两种区别是：先不执行，赋给别的变量
   yo2("王大锤", 1, 2);
   ```

5. **箭头函数**中 this 的指向：ES6 中的箭头函数并不会使用上面四条标准的绑定规则，而是会**继承外层函数调用的 this 绑定**（无论 this 绑定到什么）

## 2、this 好处是啥？

> 指向作用，非常动态
