# npm

> 包管理工具：Node Package Manager

- 在 npm 中，包（package）、模块（module）、依赖（dependency）说的都是一回事儿
- 背景：这个世界上有很多相似的问题和解决方法，人类不会那么笨每次都重新写一遍，那索性直接封装成一个包
- 以前：用 CDN 链接、文件下载到本地等来引用这些包
- 现在：项目越来越复杂，包与包之间的依赖关系错综复杂，而且版本更替也是大问题（某一个包更新了版本，依赖于它的其它包可能就不能用了）。如果你还用以前那种方法，你得先知道哪些包需要更新，更新到哪个版本，然后再手动一个个包去更新，若有 1 万个包需要更新，你就 over 了。那 npm 就可以帮你管理这些相互依赖的包、以及它们之间的版本关系

## 基本操作

1. `npm init` 初始化目录，它会创建一个 package.json 文件
2. `npm install 包名` 安装，创建并放到 node_modules 目录下（默认最新版）
3. `npm install 包名@版本号` 安装具体版本号（会覆盖掉原来版本）
4. `npm uninstall 包名` 卸载
5. `npm update 包名` 更新到最新版本（可由 2、3 替代）

- package.json 文件的内容都有啥？

  1. `"scripts"`属性，是用来指定一些命令的快捷方式，如：`npm run sayHello`
  2. `dependencies`属性：生产环境下用到的包及其版本号，如：`npm install jquery --save`

     - 注意：新版 npm 自动添加`--save`，因此上边可以写成`npm install jquery`

  3. `devDependencies`属性：开发环境下才用到的包及其版本号（生产环境不需要），如：`npm install webpack --save-dev`或`npm install webpack -D`
