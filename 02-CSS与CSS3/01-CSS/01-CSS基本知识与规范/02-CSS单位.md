# CSS 单位

## 绝对单位

- 像素 px：`web 中最常用`
- 英寸 in：`1in = 2.54cm = 96px`
- 厘米 cm：`1cm = 10mm = 96px/2.54 = 37.8px`
- 毫米 mm：`1mm = 0.1cm = 3.78px`
- 点 pt：`1pt = 1/72in = =0.0139in = 1/722.54cm = 1/7296px = 1.33px`
- 派卡 pc：`1pc = 12pt = 1/6in = 1/6\*96px = 16px`

## 相对单位

- em：用 font-size 则相对于父元素，其它则相对于自己

  ```html
  <div class="box">
    <div class="in">测试文字</div>
  </div>
  ```

  ```css
  .box {
    font-size: 20px;
  }
  .in {
    /* 相对于父元素，2*2px=40px */
    font-size: 2em;

    /* 相对于本身元素，高为5*40px=200px，宽为10*40px=400px */
    height: 5em;
    width: 10em;
  }
  ```

- rem：相对于根元素 html 的 font-size，默认下 1rem = 16px

  - 为了便于计算，一般把根元素 html 的 font-size 设为 100px，即 1rem = 100px

    ```css
    html {
      font-size: 100px;
    }
    ```

- ex：很多浏览器取 `ex = em/2`，实际中常用于微调

- ch：很多浏览器取 `ch = em/2`，实际中主要用于盲文排版

- 视口
  - vh：视口高度的 1/100
  - vw：视口宽度的 1/100
  - vmin：视口高度和宽度之间的最小值的 1/100
  - vmax：视口高度和宽度之间的最大值的 1/100
