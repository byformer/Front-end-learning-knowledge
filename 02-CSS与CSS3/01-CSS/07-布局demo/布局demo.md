# 布局 demo

- 行布局

- 两栏布局 —— 一边宽度固定，另一边自适应

- 三栏布局 —— 两边宽度固定，中间自适应，并且主要内容要优先渲染，按照 DOM 从上至下的加载原则，中间的自适应部分要放在前面

  - 圣杯法（参考：https://www.yuque.com/fe9/basic/ecdg1z ）
  - 双飞翼法（参考：https://www.yuque.com/fe9/basic/ecdg1z ）
  - flex 布局法（推荐使用，参考：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html ）

    ```
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      .container {
        display: flex;
      }

      .left {
        width: 100px;
        height: 150px;
        background-color: #ffb5bf;
        order: -1; // 改变排列顺序
      }

      .center {
        height: 150px;
        background-color: #94e8ff;
        flex-grow: 1; // 占满剩余空间，也即自适应
      }

      .right {
        width: 200px;
        height: 150px;
        background-color: #92d589;
      }
    </style>

    <div class="container">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    ```

- 混合布局
