---
title: canvas 学习
---

# Canvas 图形基础

## 栅格

canvas 元素创建了一个二位坐标空间，类似于:
![https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes/canvas_default_grid.png)

:::tip 提示
如果图像是扭曲的，尝试使用`width`和`height`属性来设置宽高，而不是使用 CSS
:::

## 绘制矩形

1. `fillRect(x, y, width, height)` 绘制一个填充的矩形
2. `strokeRect(x, y, width, height)` 绘制一个矩形的边框
3. `clearRect(x, y, widht, height)` 清楚指定矩形区域，让清楚部分完全透明
4. `rect(x, y, width, height)` 通过矩形路径来绘制矩形，当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。

## 绘制路径

1. `beginPath()` 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
2. `closePath()` 闭合路径之后图形绘制命令又重新指向到上下文中
3. `stroke()` 通过线条来绘制图形轮廓
4. `fill()` 通过填充路径的内容区域生成实心的图形

### 移动笔触

`moveTo(x, y)` 将笔触移动到指定的坐标 x, y 上，一般使用`beginPath()`初始化之后会使用该函数设置笔触的起点

### 线

绘制直线，需要用到的方法。

`lineTo(x, y)` 绘制一条从笔触当前位置到指定 x, y 的位置的直线

### 圆弧

1. `arc(x, y, radius, startAngle, endAngle, anticlockwise)` 以(x, y)为圆心，以 radius 为半径的圆弧，从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向(默认顺时针)生成

2. `arcTo(x1, y1, x2, y2, radius)` 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点

:::tip 备注
`arcTo()`这个方法的实现并不是那么可靠。
`arc()`函数中需要弧度。js 中弧度的表达式: **弧度=(Math.PI/180)\*角度**
:::

## 二次贝塞尔曲线及三次贝塞尔曲线

1. `quadraticCurveTo(cp1x, cp1y, x, y)` 绘制二次贝塞尔曲线，`cp1x, cp1y`为一个控制点, `x, y`为一个控制点

**示例**

<div>
    <p>画布大小为300 * 300。</p>
    <p>下面为一个二次贝塞尔曲线，通过改变`quadraticCurveTo`的变量来查看结果。</p>
    <div class="flex flex-wrap space-x-4">
        <div class="mb-4">
            <label for="cp1x">cp1x：</label>
            <input id="cp1x" type="text" v-model="cp1x" class="inline-block ring-1 w-[80px] ring-green-400 rounded-md px-2 py-1 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-2" />
        </div>
        <div class="mb-4">
            <label for="cp1x">cp1y：</label>
            <input id="cp1x" type="text" v-model="cp1y" class="inline-block ring-1  w-[80px] ring-green-400 rounded-md px-2 py-1 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-2" />
        </div>
         <div class="mb-4">
            <label for="cp1x">x：</label>
            <input id="cp1x" type="text" v-model="x" class="inline-block ring-1  w-[80px] ring-green-400 rounded-md px-2 py-1 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-2" />
        </div>
         <div class="mb-4">
            <label for="cp1x">y：</label>
            <input id="cp1x" type="text" v-model="y" class="inline-block ring-1  w-[80px] ring-green-400 rounded-md px-2 py-1 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-2" />
        </div>
    </div>
    <canvas ref="cl1" width="300" height="300" class="border"></canvas>
</div>

<script setup>
import {ref, onMounted,watch} from 'vue'
const cl1 = ref(null)
const cp1x = ref(100)
const cp1y = ref(20)
const x = ref(200)
const y = ref(70)

watch([cp1x, cp1y, x, y], () => {
    const ctx = cl1.value.getContext('2d')
    if (ctx) {
        cl1.value.width = 300
        cl1.value.height = 300
        ctx.beginPath()
        // 二次贝塞尔曲线
        ctx.moveTo(50, 80) // 起点
        ctx.quadraticCurveTo(cp1x.value, cp1y.value, x.value, y.value) // 控制点和终点
        ctx.lineWidth = 5
        ctx.strokeStyle = 'red'
        ctx.stroke()
    }
})

onMounted(() => {
    const ctx = cl1.value.getContext('2d')
    if (ctx) {
        ctx.beginPath()
        // 二次贝塞尔曲线
        ctx.moveTo(50, 80) // 起点
        ctx.quadraticCurveTo(cp1x.value, cp1y.value, x.value, y.value) // 控制点和终点
        ctx.lineWidth = 5
        ctx.strokeStyle = 'red'
        ctx.stroke()
    }

})
</script>

2. `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)` 绘制三次贝塞尔曲线，`cp1x, cp1y`为第一个控制点，`cp2x, cp2y`为第二个控制点，`x, y`为结束点

# 使用样式和颜色

## 色彩 Colors

1. `fillStyle = color` 设置图形的填充颜色
2. `strokeStyle = color` 设置图形轮廓的颜色

::: info 备注
`color` 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。
一旦设置了这两个值之后就是新图案的默认值，如果需要不同的颜色时需要重新设置这两个的值
:::

CCS3 的合法值:

```js
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

## 透明度 Transparency

1. `globalAlpha = transparencyValue` 这个时全局属性，将影响 canvas 里所有图形的透明度，有效值范围 0.0 - 1.0，如果需要大量拥有相同透明度的图形时这个属性相当高效。不过只使用`strokeStyle` 和 `fillStyle` 属性接受 CSS3 的透明颜色值也是可以的

```js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

## 线型 Line Styles

1. `lineWidth = value` 设置线条宽度 - `1 2 3`
2. `lineCap = type` 设置线条末端样式 - `butt round square 默认butt`
3. `lineJoin = type` 设置线条之间结合处的样式 - `round bevel miter 默认miter`
4. `miterLimit = value` 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. `getLineDash()` 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. `setLineDash(segments)` 设置当前虚线样式
7. `lineDashOffset = value` 设置虚线样式的起始偏移量

## 渐变 Gradients
