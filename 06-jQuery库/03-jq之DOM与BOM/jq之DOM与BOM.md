# jq 之 DOM 与 BOM

## DOM

1. 获取与设置内容

   - html()：获取或设置所选元素的**内容（包括 HTML 标记）**

     ```js
     $("#test").html("Hello world!");
     ```

   - text()：获取或设置所选元素的**文本内容**

     ```js
     $("#test").text("<b>Hello world!</b>");
     ```

   - val()：获取或设置**表单字段的值**

     ```js
     $("#test").val("RUNOOB");
     ```

2. 获取与设置属性

   - attr()：获取或设置属性值

     ```js
     $("#runoob").attr("href", "http://www.runoob.com/jquery");
     ```

     ```js
     // 设置多个属性
     $("#runoob").attr({
       href: "http://www.runoob.com/jquery",
       title: "jQuery 教程"
     });
     ```

3. 添加元素

   - 作用于被选元素的子级

     - append()：在被选元素的结尾插入内容
     - prepend()：在被选元素的开头插入内容

   - 作用于被选元素的同级

     - after()：在被选元素之后插入内容
     - before()：在被选元素之前插入内容

   ```js
   /*
   初始状态：
   <p>
     <span class="s1">s1</span>
   </p>
   */

   $("p").append('<span class="s2">s2</span>');
   /*
   结果：
   <p>
     <span class="s1">s1</span>
     <span class="s2">s2</span>
   </p>;
   */

   $("p").after('<span class="s2">s2</span>');
   /*
   结果：
   <p>
     <span class="s1">s1</span>
   </p>
   <span class="s2">s2</span>
   */
   ```

4. 删除元素

   - remove()：删除被选元素及其子元素
   - empty()：删除被选元素的子元素

5. 操作 CSS

   - addClass()：向被选元素添加一个或多个类

     ```js
     $("button").click(function() {
       $("div").addClass("blue important");
     });
     ```

     ```css
     .blue {
       color: blue;
     }
     .important {
       font-weight: bold;
       font-size: xx-large;
     }
     ```

   - removeClass()：从被选元素删除一个或多个类
   - toggleClass()：对被选元素进行添加/删除类的切换操作
   - css()：获取或设置一个或多个样式属性

     ```js
     // 获取
     $("p").css("background-color");

     // 设置
     $("p").css({ "background-color": "yellow", "font-size": "200%" });
     ```

6. 查找、过滤

   - 后代：`$(selector).find();`
   - 子代：`$(selector).children();`
   - 唯一父亲：`$(selector).parent();`
   - 兄弟：`$(selector).next();`和`$(selector).prev();`
   - 获取返回数组中的第 n 个 元素：`$(selector).eq(n);`
