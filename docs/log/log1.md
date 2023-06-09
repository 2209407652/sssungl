---
title: 博客日记
head:
  - - meta
    - name: description
      content: Vite & Vue Powered Static Site Generator
  - - meta
    - name: keywords
      content: SEO,博客,vite,vue,vitepress
---

# VitePres 静态站点生成器

```ts
// config.ts
  ["link", { rel: "icon", href: "/favicon.ico" }],
  ["link", { rel: "stylesheet", href: "/vars.css" }],
  // ["link", { rel: "stylesheet", href: "/index.css" }],
  ["script", { src: "https://cdn.tailwindcss.com" }],
```

```json
// package.json
 "dependencies": {
    "gsap": "^3.10.4"
  },
  "devDependencies": {
    "@types/node": "^18.6.3",
    "vitepress": "^1.0.0-alpha.4",
    "vue": "^3.2.37"
  },
```

<!-- https://aplayer.js.org/#/zh-Hans/?id=%E6%AD%8C%E8%AF%8D%E6%A0%BC%E5%BC%8F -->

## 2023/4/17

**Deploy for Github Pages**

1. 修改`docs/.vitepress/config.ts`

```ts
 base: "/sssungl/", //这里为仓库名字，前后始终加'/'
```

2. 添加`.github/workflows/deploy.yml`文件

```yml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

:::tip
请替换相应的分支名称。比如你要构建的分支是`master`，那么你应该在上面的文件中替换`main`为`master`
:::

3. 修改仓库`Github Actions`权限

![修改](http://image.sssungl.xyz/vitepress/202304171503343.png)

4. 提交代码到`main`分支。`git push -u origin main`

5. 等待

6. 添加站点, 单机`Visit site`即可查看站点，每次推送都会自动部署站点

![站点](http://image.sssungl.xyz/vitepress/202304171506477.png)

## V0.0.3

集成 axios。

### ⚙️ 安装

```
pnpm install axios
```

### ✏️ 使用

1. 新建文件夹`utils`下`axios.ts`

```ts
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response;
  },
  (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error);
  }
);

export default service;
```

2. 自定义扩展 axios 模块`shims-axios.d.ts`

```ts
import { AxiosRequestConfig } from "axios";
/**
 * 自定义扩展axios模块
 * @author Maybe
 */
declare module "axios" {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}
```

3. 请求数据
   该接口来自 [英雄联盟官网](https://lol.qq.com/main.shtml)

```ts
import request from "../utils/axios";

export const GetHerosInfoAPI = () => {
  return request<ResponseType<ResHerosInfo>>({
    url: "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2766120",
    method: "get",
  });
};
```

## V0.0.2

尝试加入 tailwindcss,并实现自动化打包部署到云服务器
目前采用的方法时 CDN 方式引入 tailwindcss

打包构建

```sh
# 打包生成静态文件
npm run build

# 进入打包好的文件夹
cd docs/.vitepress

# 将dist发送到服务器
scp -r dist username@password:/your r address

# 删除本地dist
rm -r dist
```

## V0.0.1

首页开始按钮添加链接到个人中心展示页。

使用到动画库 [GSAP(GreenSock)](https://greensock.com/)

### ✏️ 使用笔记

在 vue3 中使用 GSAP。

#### 1.⚙️ 安装

```sh
pnpm add gsap
```

#### 2.You can include GSAP in your pages or component files with this command:

```ts
import { gsap } from "gsap";
```

#### 3.Getting Started

```ts
gsap.to(Element, options);
// or
gsap.from(Element, options);
// or
gasp.formTo(Element, options1, options2);
```

## V0.0.0

基于 vitepress 博客搭建的开始。

::: warning
Nodejs === 16.13.2、pnpm === 7.8.0、vitepress === 1.0.0-alpha.4
:::

### Step.1

创建文件夹并进入。

```sh
mkdir vitepress-starter && cd vitepress-starter
```

初始化。

```sh
pnpm i
```

### Step.2

添加 VitePress 和 Vue 为开发依赖项。

```sh
pnpm install -D vitepress vue
```

::: details 如果遇到报错警告
添加如下代码到 package.json

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "@types/react",
      "react",
      "react-dom"
    ]
  }
}

```

:::

创建第一个文档。

```sh
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

### Step.3

添加脚本到`package.json`。

```json
{
  ...
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  },
  ...
}

```

启动本地开发服务器。

```sh
npm run dev
```

### Step.4

在`docs`文件夹下建立文档页面,类似如下结构。

```
.
├─ docs
│  ├─ getting-started.md
|  ├─ blog
|  |  └─ hello.md
│  └─ index.md
└─ package.json

```
