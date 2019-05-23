# HTML 规范

### 页头部分

1. 以`<!DOCTYPE html>`开头
2. 使用`<meta charset="utf-8">`
3. 加入适当的 keywords 和 description

   ```html
   <meta name="description" content="不超过150个字符" />
   <meta name="keywords" content="" />
   ```

4. 页面 title 是不可缺少的一项，在编码声明之后

   ```html
   <head>
     <meta charset="UTF-8" />
     <title>页面标题</title>
   </head>
   ```

### 资源引入

1. head 中引入 css

   ```html
   <link rel="stylesheet" href="test.css" />
   ```

2. body 底部引入 js

   ```html
   <script src="test.js"></script>
   ```

### 结构优化

1. 任何时候都要尽量使用最少的标签并保持最小的复杂度
2. 结构顺序和视觉顺序基本保持一致，按照从上至下、从左到右的视觉顺序书写 HTML 结构。有时为了便于搜索引擎抓取，也会将重要内容在 HTML 结构顺序上提前
3. 结构、表现、行为三者分离
4. 可以在大的模块之间用空行隔开，使模块更清晰

### 语义化

1. 尽可能少地使用无语义标签 span 和 div
2. 尽量使用 HTML5 的标签
3. 不要使用纯样式标签，如 b、u 等，而改用 CSS 设置

### 代码格式

1.  缩进 2 个空格

2.  属性

    - 元素的属性和值全部小写
    - 属性值必须用双引号包围
    - 自定义属性建议以 xxx- 为前缀，推荐使用 data-
    - HTML 属性应该按照特定的顺序出现以保证易读性

      ```
      id
      class
      name
      data-xxx
      src, for, type, href
      title, alt
      aria-xxx, role
      ```

3.  图片

    - 为图片添加 alt 属性，提高图片加载失败时的用户体验
    - 为图片添加 width 和 height 属性，以避免页面抖动
    - 有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现

4.  表单

    - 有文本标题的控件使用 label 标签将其与其标题相关联。最好将控件置于 label 内，以减少不必要的 id

      ```html
      <label
        ><input type="checkbox" name="confirm" value="on" />
        我已确认上述条款</label
      >
      ```

    - 使用 button 元素时必须指明 type 属性值。因为 button 元素的默认 type 为 submit

5.  多媒体

    - 在支持 HTML5 的浏览器中优先使用 audio 和 video 标签来定义音视频元素，并使用退化到插件的方式来对多浏览器进行支持

      ```html
      <audio controls>
        <source src="audio.mp3" type="audio/mpeg" />
        <source src="audio.ogg" type="audio/ogg" />
        <object width="100" height="50" data="audio.mp3">
          <embed width="100" height="50" src="audio.swf" />
        </object>
      </audio>

      <video width="100" height="50" controls>
        <source src="video.mp4" type="video/mp4" />
        <source src="video.ogg" type="video/ogg" />
        <object width="100" height="50" data="video.mp4">
          <embed width="100" height="50" src="video.swf" />
        </object>
      </video>
      ```
