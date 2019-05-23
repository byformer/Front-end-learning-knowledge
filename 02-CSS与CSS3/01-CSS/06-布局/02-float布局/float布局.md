# float —— 浮动布局（基本被淘汰，但为了兼容性没办法）

- 盒子一旦 float，这个盒子就拥有 inline-block 特性
- 清除浮动：父元素使用 after 伪元素

  ```html
  <div class="container">
    <div class="box_1 float">box 1</div>
    <div class="box_2 float">box 2</div>
  </div>
  ```

  ```css
  .container::after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    zoom: 1; /* 兼容IE */
  }
  ```

- n 栏网格系统
