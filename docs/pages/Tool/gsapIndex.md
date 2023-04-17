---
title: GSAP
---

# 官网快速入门教程

## GreenSock

GSAP is a robust JavaScript toolset that turns developers into animation superheroes. Build high-performance animations that work in every major browser. Animate CSS, SVG, canvas, React, Vue, WebGL, colors, strings, motion paths, generic objects...anything JavaScript can touch! GSAP's ScrollTrigger plugin lets you create jaw-dropping scroll-based animations with minimal code. No other library delivers such advanced sequencing, reliability, and tight control while solving real-world problems on over 11 million sites. GSAP works around countless browser inconsistencies; your animations just work. At its core, GSAP is a high-speed property manipulator, updating values over time with extreme accuracy. It's up to 20x faster than jQuery! See https://greensock.com/why-gsap/ for what makes GSAP so special.

GSAP 是一个强大的 JavaScript 工具集，可以将开发人员变成动画超级英雄。构建适用于所有主流浏览器的高性能动画。动画 CSS、SVG、canvas、React、Vue、WebGL、颜色、字符串、运动路径、通用对象……JavaScript 可以触摸的任何东西！GSAP 的 ScrollTrigger 插件允许您用最少的代码创建令人惊叹的基于滚动的动画。没有其他库在解决 1100 多万个站点上的实际问题的同时提供如此先进的排序、可靠性和严格的控制。GSAP 解决了无数浏览器不一致的问题；你的动画刚刚好用。其核心是，GSAP 是一种高速属性操纵器，能够随时间以极高的精度更新值。它比 jQuery 快 20 倍！查看 https://greensock.com/why-gsap/ 是什么让 GSAP 如此特别。

## ⚙️ 安装 PNPM

```sh
pnpm install gsap
```

## ✅ 引入

```ts
// typical import  普通引入
import gsap from "gsap";

// get other plugins:  其他插件:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
```

## Getting Started

- `gsap.to(".circle1", { x: 40, fill: 'blue' })`
- `gsap.from(".circle", { x: -40, fill: 'blue', })`
- `gsap.fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' })`
- `gsap.set(".circle", { x: 40, fill: 'blue', })`

::: tip 选择标签
可以使用 CSS 选择器来选择需要添加动画 HTML 标签，也可以获取 DOM 的方式，如:

```ts
let box = document.querySelector(".box");
gsap.to(box, { x: 200 });

// or even an Array of element 甚至是一个标签数组
const a = document.querySelector(".a");
const b = document.querySelector(".b");
gsap.to([a, b], { x: 200 });
```

:::

### So what properties can I animate?

那么，我可以设置那些动画呢？在 `options` 可选项里:
| GSAP | CSS |
| ------------- |:-------------:|
| x: 100 | transform: translateX(100px) |
| y: 100 | transform: translateY(100px) |
| xPercent: -50 | transform: translateX(-50%) |
| ypercent: -50 | transform: translateY(-50%) |
| rotation: 360 | transform: rotate(360deg) |
| rotationX: 360 | transform: rotateX(360deg) |
| rotationY: 360 | transform: rotateY(360deg) |
| scale: 2 | transform: scale(2, 2) |
| scaleX: 2 | transform: scaleX(2, 2) |
| scaleY: 2 | transform: scaleY(2, 2) |
| transformOrigin: "0% 100%" | transform-origin: 0% 100% |
| skewX: 45 | transform: skewX(45deg) |
| skewY: 45 | transform: skewY(45deg) |

::: tip 选项其他写法
By default GSAP will use px and degrees for transforms but you can use other units like, vw, radians or even do your own JS calculations or relative values!

默认情况下，GSAP 将使用 px 和度数进行变换，但您可以使用其他单位，例如 vw、弧度，甚至可以进行自己的 JS 计算或相对值！

```ts
x: 200, // use default of px
x: "+=200" // relative values
x: '40vw', // or pass in a string with a different unit for GSAP to parse
x: () => window.innerWidth / 2, // you can even use functional values to do a calculation!

rotation: 360 // use default of degrees
rotation: "1.25rad" // use radians
```

:::
