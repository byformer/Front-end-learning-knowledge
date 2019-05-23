# webpack

- 背景：历史包袱很重，前端新需求与旧标准之间矛盾
- 矛盾点：js 在浏览器环境不支持模块化，各个包之间的信息交流只能通过暴露全局变量，最坑爹的是会造成全局污染
- 希望：在 node 环境下就可以使用模块化，任何一个包都有一个入口与出口
- 作用：把 node 环境下的代码让浏览器能够识别
- 牛逼：啥都能打包

## 安装

- 前提：先安装 node.js，因为 webpack 是基于 node 环境的

- `npm install webpack --save-dev` 作用于开发环境，且局部安装（版本更好控制）

## 配置

```js
/* 
  手动创建一个配置文件：
    webpack.config.js

  内容如下：
*/
module.exports = {
  // 入口包
  entry: "./xxx.js",
  // 出口包
  output: {
    // 出口包名
    filename: "yyy.js",
    // 出口包的目录，__dirname表示当前文件（即webpack.config.js）所在的目录
    path: __dirname
  }
};
```
