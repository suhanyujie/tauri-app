# ui

## 开发
### 本地启动
* `npm run tauri dev`

## 其他

### 从 0 编写一个框架模板开发步骤
* 路径别名设置
* 设定路由
* 设定 layout
* 设定

## 参考
* naiveui https://www.naiveui.com/zh-CN
* npm 镜像 https://zhuanlan.zhihu.com/p/166175735
* 设置 volar https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669
* 带你快速构建一个vite+vue3.0+ts+naive-ui的项目 https://juejin.cn/post/7046208662255173645
* 构建一个自己的Vue组件库 https://www.bilibili.com/video/BV1VY4y1H7g9

## 解决问题参考
* VUE3+Typescript 引用process提示错误 https://www.cnblogs.com/zsg88/p/15700520.html

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
