---
title: TailwindCSS
---

# 介绍

## 关于 TailwinCSS

[中文文档](https://www.tailwindcss.cn/)

::: warning 提示
中文文档最高版本为 v2.2.16, 建议查看英文文档

[英文文档](https://tailwindcss.com/docs)
:::

<span class="text-2xl font-bold">无需离开您的 HTML，即可快速建立现代网站。</span>

Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。

## VitePress 中使用

之前一直在 Vite2+Vue3 中使用 Tailwind CSS，官网给出的使用步骤很明确，于是我就尝试在 vitepress 中使用，同样的方法好像不起作用。vitepress 中没有`main.ts`，`index.css`不好引入

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

所以尝试了在`config.ts`中直接引入或者在应用配置中添加`head`，然后把`index.css`放在`public`文件夹下，效果并没有出现。

使用官网的 CDN 方式引入，同样在`config.ts`中配置`head`，然后新建`tailwind.config.js`文件配合 Tailwind CSS IntelliSense 插件来智能提示 Class 类名。
由于不建议在生产环境中使用 CDN 的方式，所以开发环境和生产环境都会出现一些小问题，不过并不影响使用。

毕竟不建议在生产环境中使用，所以只是演示一下。

**<span class="text-xl">🚀 测试</span>**

```html
<template>
  <div class="home flex flex-col justify-center items-center font-bold">
    <img class="sss-avatar w-1/3" src="/logo.png" />
    <p class="s1">👋Hi,我叫孙光龙，目前是一名大四的学生(还有一个月)。</p>
    <p class="s2">💦想给自己起一个网名，但是没有什么想法。╰（‵□′）╯</p>
    <p class="s3">
      🧑🏽一个空想主义者，每天都有很多不切实际的幻想，从来没有付出过实际行动。
    </p>
    <p class="s4">
      ✨没有什么目标，喜欢前端开发(技术菜鸟🥦)，喜欢跟朋友一块打游戏(更菜🥦)。
    </p>
    <p class="s5">
      ⚙️后边还是学习前端技术为主，其余时间学习英语、剪辑、等(＠_＠;)(理想很丰满，显示很骨感)
    </p>
    <p class="s6">
      📺平时喜欢看bilibili,特别关心的up:
      <a
        href="https://space.bilibili.com/384939011/?spm_id_from=333.999.0.0"
        target="_blank"
        >Henry的小木屋</a
      >
    </p>
    <button
      class="b1 w-32 h-12 transition-colors box-border text-white bg-green-500 rounded hover:border-2 hover:border-green-400 hover:border-solid hover:bg-green-400"
      @click="goBack"
    >
      返回首页
    </button>
  </div>
</template>
```

这就是个人中心展示页的 html 结构。
