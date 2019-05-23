# String 对象

## 检索

- `stringObject.charAt(index)`
  返回 stringObject 中 index 位置的字符

- `stringObject.charCodeAt(index)`
  返回 stringObject 中 index 位置字符的字符编码

- `stringObject.indexOf(string)`
  返回找到的第一个字符串的索引，若没找到返回-1

- `stringObject.lastIndexOf(string)`
  返回找到的最后一个字符串的索引，若没找到返回-1

## 截取

- `stringObject.slice(start,end)`
  截取字符串，左闭右开

- `stringObject.substring(start,end)`
  功能同 slice()
  区别：

  1. substring() 会把负数当作 0
  2. substring()会把较小的数作为开始，较大的数作为结束

- `stringObject.substr(start,len)`
  len 表示字符个数，len 为负值时，返回空字符串

```js
// 应用：获取扩展名
function getFileFormat(fileName) {
  // 获取 "." 所在的下标索引
  var pos = fileName.lastIndexOf(".");
  // 截取扩展名
  var fileFormat = fileName.slice(pos);
  return fileFormat;
}

var result = getFileFormat("https://www.baidu.com/a.txt");
console.log(result); // 结果：.txt
```

## 字符串=>数组

- `stringObject.split("separator")`
  字符串转为数组，与 join 功能相反
  separator：必需，表示分隔符

## 替换

- `stringObject.replace(regexp/substr,replacement)`
  在字符串中用一些字符替换另一些字符，或是替换一个与正则表达式匹配的字符串
  regexp；必需，规定子字符串或要替换的模式的 RegExp 对象
  replacement：必需，一个字符串值

  ```js
  var str = "Today is fine day,Today is fine day !!!";
  console.log(str.replace("Today", "tomorrow")); // 只能替换第一个Today 结果：tomorrow is fine day,Today is fine day !!!
  console.log(str.replace(/Today/gi, "tomorrow")); // 这里用到了正则，才能替换所有的Today 结果：tomorrow is fine day,tomorrow is fine day !!!
  ```

## 大小写转换

- `stringObject.toUpperCase()`
  转为大写

- `stringObject.toLowerCase()`
  转为小写
