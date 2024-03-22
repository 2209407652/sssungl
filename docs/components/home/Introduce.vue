<script lang="ts" setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import { useRouter } from "vitepress";

// router
const router = useRouter();

/* 返回首页 */
function goBack() {
    router.go("/");
}

onMounted(() => {
    // 清除
    const aside = document.querySelector(".aside") as HTMLDivElement;
    aside.style.display = "none";

    const t1 = gsap.timeline();
    t1.from(".sss-avatar", {
        opacity: 0,
        y: 50,
    })
        .from(".s1", { opacity: 0, y: 50 })
        .from(".s2", { opacity: 0, y: 50 })
        .from(".s3", { opacity: 0, y: 50 })
        .from(".s4", { opacity: 0, y: 50 })
        .from(".s5", { opacity: 0, y: 50 })
        .from(".s6", { opacity: 0, y: 50 })
        .from(".b1", { opacity: 0, y: 50 });
});
</script>
<template>
    <div class="home">
        <img class="sss-avatar" src="/logo.png" />
        <p class="s1" style="margin: 8px">👋Hi,我叫孙光龙。</p>
        <p class="s2" style="margin: 8px">
            💦想给自己起一个网名，但是没有什么想法。╰（‵□′）╯
        </p>
        <p class="s3" style="margin: 8px">
            🧑🏽一个空想主义者，每天都有很多不切实际的幻想，从来没有付出过实际行动。
        </p>
        <p class="s4" style="margin: 8px">
            ✨没有什么目标，喜欢前端开发(技术菜鸟🥦)，喜欢跟朋友一块打游戏(更菜🥦)。
        </p>
        <p class="s6" style="margin: 8px">
            ip: 43.138.26.104, 开放端口: 3030, 8000, 3010, 4000, 服务器已经到期
        </p>
        <p class="s6" style="margin: 8px">
            uniapp云开发托管：static-mp-3eba5a2e-6b19-4748-bd72-f824b5818e70.next.bspapp.com,
            服务已经到期
        </p>
        <button class="b1" @click="goBack">返回首页</button>
    </div>
</template>
<style lang="less" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sss-avatar {
        width: 30%;
    }

    .b1 {
        width: 100px;
        height: 40px;
        background-color: var(--vp-button-brand-bg);
        color: var(--vp-button-brand-text);
        border-radius: 8px;
        border: 1px solid var(--vp-button-brand-border);

        &:hover {
            border: 1px solid var(--vp-button-brand-hover-border);
            color: var(--vp-button-brand-hover-text);
            background-color: var(--vp-button-brand-hover-bg);
        }
    }
}
</style>
