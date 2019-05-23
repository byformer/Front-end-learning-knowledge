# Array 对象

## 1、数组初识

1. **创建**数组

   - 方式一：构造函数 `var arr = new Array();`

     ```js
     var arr1 = new Array(); // []
     var arr2 = new Array(4); // [null,null,null,null]
     var arr3 = new Array(15, 16, 17); // [15,16,17]
     ```

     - 小括号()说明：

       1. 预先知道数组要保存的元素数量
       2. 向构造函数中传递元素

   - 方式二：字面量 `var arr = [];`

2. 数组的**获取**和**修改**

   - 获取 `数组[索引];`
   - 修改 `数组[索引] = 值;`

     - **注意**：索引值超出数组长度时，数组长度会改变为最后一项索引+1

       ```js
       // 例子
       var a = [1, 2, 3];
       a[9] = 4;
       console.log(a.length); // 结果：10
       console.log(JSON.stringify(a)); // [1,2,3,null,null,null,null,null,null,4]
       ```

3. 数组的 **length** 属性

   - `数组.length`
   - **注意**：

     - 如果修改的 length 大于原长度，则多出部分会置为 null
     - 如果修改的 length 小于原长度，则多出的末尾元素会被删除

       ```js
       // 例子
       var arr1 = [21, 22, 23];
       var arr2 = [11, 12, 13];

       // length 大于原长度
       arr1.length = 5;
       console.log(JSON.stringify(arr1)); // [21,22,23,null,null]

       // length 小于原长度
       arr2.length = 1;
       console.log(JSON.stringify(arr2)); // [11]
       ```

4. 数组的遍历 **for 循环**

   ```js
   var arr = ["a", "b", "c"];
   for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
   }

   /*
    * a
    * b
    * c
    */
   ```

- 其他方法：forEach()、map()、filter()、every()、some()

## 2、数组方法

### 2.1、四个基本方法

| 方法      | 功能                                 | 返回值             | 是否改变原数组 |
| --------- | ------------------------------------ | ------------------ | :------------: |
| push()    | 在数组的**最后面**插入一个或多个元素 | **该数组新的长度** |      Yes       |
| unshift() | 在数组**最前面**插入一个或多个元素   | **该数组新的长度** |      Yes       |
| pop()     | 删除数组中的**最后一个**元素         | **被删除的元素**   |      Yes       |
| shift()   | 删除数组中的**第一个**元素           | **被删除的元素**   |      Yes       |

1.push()

语法：`数组的新长度 = 数组.push(元素);`

```js
var arr = ["王一", "王二", "王三"];

var result1 = arr.push("王四"); // 末尾插入一个元素
var result2 = arr.push("王五", "王六"); // 末尾插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二","王三","王四","王五","王六"]
```

2.unshift()

语法：`数组的新长度 = 数组.unshift(元素);`

```js
var arr = ["王一", "王二", "王三"];

var result1 = arr.unshift("王四"); // 最前面插入一个元素
var result2 = arr.unshift("王五", "王六"); // 最前面插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王五","王六","王四","王一","王二","王三"]
```

3.pop()

语法：`被删除的元素 = 数组.pop();`

```js
var arr = ["王一", "王二", "王三"];

var result1 = arr.pop();

console.log(result1); // 打印结果：王三
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二"]
```

4.shift()

语法：`被删除的元素 = 数组.shift();`

```js
var arr = ["王一", "王二", "王三"];

var result1 = arr.shift();

console.log(result1); // 打印结果：王一
console.log(JSON.stringify(arr)); // 打印结果：["王二","王三"]
```

### 2.2、常见方法

| 方法      | 功能                                                  | 返回值                     | 是否改变原数组 |
| --------- | ----------------------------------------------------- | -------------------------- | :------------: |
| slice()   | **数组切片**                                          | **提取的元素所组成的数组** |       No       |
| splice()  | 从数组中**删除**指定的一个或多个元素                  | **删除的元素所组成的数组** |      Yes       |
| concat()  | **连接**两个或多个数组                                | **连接后的数组**           |       No       |
| join()    | **数组转换为字符串**                                  | **转换后的字符串**         |       No       |
| reverse() | **反转数组**                                          | **反转后的数组**           |      Yes       |
| sort()    | **数组排序**(默认按照 Unicode 编码，从小到大进行排序) | **排序后的数组**           |      Yes       |

1.slice()

语法：`新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); //注意：包含开始索引，不包含结束索引`

```js
var arr = ["a", "b", "c", "d", "e", "f"];

var result1 = arr.slice(2); // 从第二个值开始提取
var result2 = arr.slice(-2); // 从倒数第二个值开始提取
var result3 = arr.slice(2, 4); // 提取从第二个到第四个之间的值（不包括第四个值）
var result4 = arr.slice(4, 2); // 空

console.log("arr:" + JSON.stringify(arr)); // arr: ["a", "b", "c", "d", "e", "f"]
console.log("result1:" + JSON.stringify(result1)); // result1: ["c", "d", "e", "f"]
console.log("result2:" + JSON.stringify(result2)); // result2: ["e", "f"]
console.log("result3:" + JSON.stringify(result3)); // result3: ["c", "d"]
console.log("result4:" + JSON.stringify(result4)); // result4: []
```

2.splice()

语法：`新数组 = 原数组.splice(起始索引index, 需要删除的个数, 第三个参数, 第四个参数...);`

```js
var arr1 = ["a", "b", "c", "d", "e", "f"];
var result1 = arr1.splice(1); //从第index为1的位置开始，删除元素
console.log("arr1：" + JSON.stringify(arr1)); // arr1：["a"]
console.log("result1：" + JSON.stringify(result1)); // result1：["b","c","d","e","f"]

var arr2 = ["a", "b", "c", "d", "e", "f"];
var result2 = arr2.splice(-2); //从第一个位置开始，删除元素
console.log("arr2：" + JSON.stringify(arr2)); // arr2：["a","b","c","d"]
console.log("result2：" + JSON.stringify(result2)); // result2：["e","f"]

var arr3 = ["a", "b", "c", "d", "e", "f"];
var result3 = arr3.splice(1, 3); //从第index为1的位置开始删除元素,一共删除三个元素
console.log("arr3：" + JSON.stringify(arr3)); // arr3：["a","e","f"]
console.log("result3：" + JSON.stringify(result3)); // result3：["b","c","d"]

var arr4 = ["a", "b", "c", "d", "e", "f"];
var result4 = arr4.splice(1, 3, "千古壹号", "vae");
console.log("arr4：" + JSON.stringify(arr4)); // arr4：["a","千古壹号","vae","e","f"]
console.log("result4：" + JSON.stringify(result4)); // result4：["b","c","d"]
```

应用：数组去重

```js
//创建一个数组
var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素
for (var i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
  /*获取当前元素后的所有元素*/
  for (var j = i + 1; j < arr.length; j++) {
    //console.log("---->"+arr[j]);
    //判断两个元素的值是否相等
    if (arr[i] == arr[j]) {
      //如果相等则证明出现了重复的元素，则删除j对应的元素
      arr.splice(j, 1);
      //当删除了当前j所在的元素以后，后边的元素会自动补位
      //此时将不会在比较这个元素吧，我需要在比较一次j所在位置的元素
      //使j自减
      j--;
    }
  }
}

console.log(arr); // [1, 2, 3, 4, 5]
```

3.concat()

语法：`新数组 = 数组1.concat(数组2, 数组3 ...);`

```js
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var arr3 = ["千古壹号", "vae"];

var result1 = arr1.concat(arr2);
var result2 = arr2.concat(arr1, arr3);

console.log("arr1 =" + JSON.stringify(arr1)); // 原数组没变
console.log("arr2 =" + JSON.stringify(arr2)); // 原数组没变
console.log("arr3 =" + JSON.stringify(arr3)); // 原数组没变

console.log("result1 =" + JSON.stringify(result1)); // result1 = [1, 2, 3, "a", "b", "c"];
console.log("result2 =" + JSON.stringify(result2)); // result2 = ["a", "b", "c", 1, 2, 3, "千古壹号", "vae"];
```

4.join()

语法：`新的字符串 = 原数组.join("可选连接符"); // 连接符默认","`

```js
var arr = ["a", "b", "c"];

var result1 = arr.join(); // 这里没有指定连接符，所以默认使用 "," 作为连接符
var result2 = arr.join("-"); // 使用指定的字符串作为连接符

console.log(typeof arr); // 打印结果：object
console.log(typeof result1); // 打印结果：string

console.log("arr =" + JSON.stringify(arr)); // arr =["a","b","c"]
console.log("result1 =" + JSON.stringify(result1)); // result1 ="a,b,c"
console.log("result2 =" + JSON.stringify(result2)); // result2 ="a-b-c"
```

5.reverse()

语法：`反转后的数组 = 数组.reverse();`

```js
var arr = ["a", "b", "c", "d", "e", "f"];

var result = arr.reverse(); // 将数组 arr 进行反转

console.log("arr =" + JSON.stringify(arr)); // arr =["f","e","d","c","b","a"]
console.log("result =" + JSON.stringify(result)); // result =["f","e","d","c","b","a"]
```

6.sort()

语法：`排序后的数组 = 数组.sort(可选参数);`

1. sort() 方法不带参，则默认按照 Unicode 编码，从小到大进行排序

   ```js
   var arr1 = [5, 2, 11, 3, 4, 1];

   var result = arr1.sort(); // 将数组 arr1 进行排序

   console.log("arr1 =" + JSON.stringify(arr1)); // arr1 =[1,11,2,3,4,5]
   console.log("result =" + JSON.stringify(result)); // result =[1,11,2,3,4,5]
   ```

2. sort()方法带参，我们就可以自定义排序规则

   ```js
   var arr2 = [5, 2, 11, 3, 4, 1];

   // 自定义排序规则
   var result = arr2.sort(function(a, b) {
     return a - b; // 升序排列
     // return b - a; // 降序排列
   });

   console.log("arr2 =" + JSON.stringify(arr2)); // arr2 =[1,2,3,4,5,11]
   console.log("result =" + JSON.stringify(result)); // result =[1,2,3,4,5,11]
   ```

### 2.3、其他方法

| 方法                             | 功能                                                  |
| :------------------------------- | :---------------------------------------------------- |
| indexOf(value)                   | 从前往后索引，获取 value 在数组中的第一个下标         |
| lastIndexOf(value)               | 从后往前索引，获取 value 在数组中的最后一个下标       |
| find(function())                 | 找出**第一个**满足「指定条件返回 true」的元素。       |
| findIndex(function())            | 找出**第一个**满足「指定条件返回 true」的元素的 index |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**                          |
| Array.of(value1, value2, value3) | 将**一系列值**转换成数组。                            |

1.indexOf() 和 lastIndexOf()：获取数据的索引

语法：

```js
索引值 = 数组.indexOf(value);

索引值 = 数组.lastIndexOf(value);
```

```js
var arr = ["a", "b", "c", "d", "e", "d", "c"];

console.log(arr.indexOf("c")); // 2
console.log(arr.lastIndexOf("d")); // 5
```

2.find()

语法：

```js
arr.find(function(item, index) {
  return true;
});
```

```js
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.find(function(item, index) {
  return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素返回
});

console.log(result); //打印结果：5
```

3.findIndex()

语法：

```js
arr.findIndex(function(item, index) {
  return true;
});
```

```js
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.findIndex(function(item, index) {
  return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素的index返回
});

console.log(result); //打印结果：3
```

4.Array.from()

语法：

```js
arr = Array.from(arrayLike);
```

5.Array.of()

语法：

```js
Array.of(value1, value2, value3);
```

```js
let arr = Array.of(1, "abc", true);

console.log(arr); // 结果：[1, "abc", true]
```

### 2.4、补充

1.Array.isArray()：判断是否为数组

```js
布尔值 = Array.isArray(被检测的值);
```

以前，我们会通过 `A instanceof B`来判断 A 是否属于 B 类型。但是在数组里，这种 instanceof 方法已经用的不多了，因为有 Array.isArray()方法

2.清空数组

```js
var array = [1, 2, 3, 4, 5, 6];

array.splice(0); // 方式1：删除数组中所有项目
array.length = 0; // 方式2：length属性可以赋值，在其它语言中length是只读
array = []; // 方式3：推荐
```
