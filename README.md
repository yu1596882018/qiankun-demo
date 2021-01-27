## 基于`qiankun`整合`angular`与`vue`的微前端架构DEMO

## 运行项目引导

### 安装yarn包

```
npm install -g yarn
```

### 安装依赖

```
yarn install
yarn run demo:install
```

### 运行项目

```
yarn run start
```

## 项目目录介绍

+ angular9
    + angular微应用目录，独立部署，主应用通过url访问地址引入
+ main
    + 主应用目录，负责整合angular和vue微应用
+ vue
    + vue微应用目录，独立部署，主应用通过url访问地址引入

## qiankun官方文档

https://qiankun.umijs.org/zh

## demo地址
+ 代码地址：https://github.com/yu1596882018/qiankun-demo.git
+ 访问地址
    + 主应用：http://39.108.161.237
    + vue子应用：http://39.108.161.237/child/vue-history/
    + angular子应用：http://39.108.161.237/child/angular-history/

## 特性

- 📦 **基于 [single-spa](https://github.com/CanopyTax/single-spa)** 封装，提供了更加开箱即用的 API。
- 📱 **技术栈无关**，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
- 💪 **HTML Entry 接入方式**，让你接入微应用像使用 iframe 一样简单。
- 🛡​ **样式隔离**，确保微应用之间样式互相不干扰。
- 🧳 **JS 沙箱**，确保微应用之间 全局变量/事件 不冲突。
- ⚡️ **资源预加载**，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
- 🔌 **umi 插件**，提供了 [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun) 供 umi
  应用一键切换成微前端架构系统。
