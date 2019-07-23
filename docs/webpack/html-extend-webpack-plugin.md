---
sidebarDepth: 2
meta:
  - name: keywords
    content: html-extend-webpack-plugin，@web-pro/html-extend-webpack-plugin, @pro-cli/babel-preset-pro-vue, pro-vue
  - name: description
    content: 本文主要是babel插件babel-preset-pro-vue使用
---


# html-extend-webpack-plugin


一个`html-webpack-plugin`扩展插件，该插件依赖于 [html-webpack-plugin@4.0.0-beta.5 插件](https://github.com/jantimon/html-webpack-plugin)

## 版本与仓库

`v1.0.1`

- [中文文档](https://webxiaoma.github.io/project-cli/docs/blogs/webpack/html-extend-webpack-plugin)
- [GitHub 仓库](https://github.com/webxiaoma/project-cli/blob/master/packages/webpack/html-extend-webpack-plugin)

## 安装

使用`npm`安装

```js
npm i @web-pro/html-extend-webpack-plugin -D
```

使用`yarn`安装

```js
yarn add @web-pro/html-extend-webpack-plugin -D
```

## 作用

该插件的作用是在`webpack`中我们使用`html-webpack-plugin`插件生成 `html`模板文件时，向生成的模板（`html`）中插入第三方`cdn`形式的`js` 或 `css`


## 使用

在 `webpack` 的 `plugin` 中进行配置,

```js
const HtmlExtendWebpackPlugin = require("@web-pro/html-extend-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  plugin:[
    new HtmlExtendWebpackPlugin(HtmlWebpackPlugin,options),
  ]
}
```
- 第一个参数`HtmlWebpackPlugin`为`html-webpack-plugin`插件对象

- 第二个参数`options`为配置对象：

```js
{
  addJs:Array || Function,
  addCss:Array || Function,
}
```

1. 字段`addJs`添加引入`js`的地址（如CDN），值可以为数组或函数，

- 当为数组`Array`时，默认情况下打包时会将数组中的`js`地址依次插入到`html`模板中，位置处于打包出的`<script></script>`标签最前面; 

- 当为函数`Function`时，函数的第一参数为一个数组，里边存储着打包时，引入的`js`链接地址，你可以将要添加的`CDN`插入到数组中某个位置，并返回一个新数组，这样打包出`html`模板中，引入的`script`顺序会按照你返回的数组中的顺序引入


2. 字段`addCss`字段同上，只不过是对`css`进行处理


## 例子

```js
const HtmlExtendWebpackPlugin = require("@web-pro/html-extend-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  plugin:[
    new HtmlExtendWebpackPlugin(HtmlWebpackPlugin,{
      // 数组形式添加js
      addJs:["https://cdn.bootcss.com/vue/2.6.10/vue.common.js"], 


      // 函数形式添加js
      addJs:function(jsList){
        return jsList.push("https://cdn.bootcss.com/vue/2.6.10/vue.common.js")
      }, 

      // 数组形式添加css
      addCss:["https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.css"], 


      // 函数形式添加css
      addCss:function(cssList){
        return cssList.push("https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.css")
      }, 
    }),
  ]
}
```