<script lang="ts" setup>
import { useRouter } from "vitepress";

// router
const router = useRouter();

// props
interface HeroCardProps {
  heroId: string;
  alias: string;
}

const props = withDefaults(defineProps<HeroCardProps>(), {
  heroId: "0",
  alias: "None",
});
</script>
<template>
  <div class="h-card">
    <div class="h-avatar">
      <div class="h-img">
        <img
          :src="`https://game.gtimg.cn/images/lol/act/img/champion/${props.alias}.png`"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="h-b">22</div>
    </div>
    <span class="h-title">{{ props.alias }}</span>
  </div>
</template>
<style lang="less" scoped>
.h-card {
  box-sizing: border-box;
  margin: 8px 8px 0 0;
  width: 8rem;

  &:hover {
    .h-title {
      background-color: var(--hero-card-background-hover);
    }

    .h-avatar::after {
      transform: rotate(45deg) translateY(-119%);
    }
  }

  .h-avatar {
    width: 8rem;
    height: 8rem;
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 2rem;
      height: 2rem;
      background-color: var(--vp-c-bg);
      transform: rotate(45deg) translateY(-69%);
      transition: transform 0.3s;
    }

    .h-img {
      width: 9rem;
      height: 9rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .h-title {
    display: block;
    padding: 4px 0;
    background-color: var(--hero-card-background);
    color: var(--hero-card-text-light);
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    transition: background 0.3s;
    font-style: italic;
    cursor: pointer;
  }
}
</style>
