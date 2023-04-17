<script lang="ts" setup>
import HeroCardVue from "./components/HeroCard.vue";
import { gsap } from "gsap";
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import { GetHerosInfoAPI, HerosInfo } from "../../api/heros";

// 英雄职业
const heroJob = reactive([
  { type: "all", name: "全部" },
  { type: "fighter", name: "战士" },
  { type: "mage", name: "法师" },
  { type: "assassin", name: "刺客" },
  { type: "tank", name: "坦克" },
  { type: "marksman", name: "射手" },
  { type: "support", name: "辅助" },
]);
const currentHeroJob = ref(0);

// 英雄参数
const heros = ref<HerosInfo[]>();
const version = ref("");
const optHeros = ref<HerosInfo[]>();

// 监听筛选条件
watch(currentHeroJob, (nv) => {
  if (nv === 0) {
    optHeros.value = heros.value;
    return;
  }
  optHeros.value = heros.value?.filter((h) =>
    h.roles.includes(heroJob[nv].type)
  );
});

onMounted(async () => {
  // 获取参数
  const { data: reHeros } = await GetHerosInfoAPI();
  version.value = reHeros.version;
  heros.value = reHeros.hero;
  /* 筛选条件后 */
  optHeros.value = reHeros.hero;
  console.log(heros.value);

  // wait
  await nextTick();

  // 滚动渲染
  gsap.from(".h-c", {
    y: 50,
    opacity: 0,
  });
});
</script>
<template>
  <!-- 当前版本 -->
  <div class="v">Current Version: {{ version }}</div>
  <!-- 英雄职业 -->
  <div class="c_hero_j">
    <div
      v-for="(hj, index) in heroJob"
      :key="hj.type"
      class="job"
      :class="{ active: index === currentHeroJob }"
      @click="currentHeroJob = index"
    >
      {{ hj.name }}
    </div>
  </div>
  <!-- 英雄卡片 -->
  <div class="h-c">
    <HeroCardVue
      v-for="hero in optHeros"
      :key="hero.heroId"
      :alias="hero.alias"
      :hero-id="hero.heroId"
    />
  </div>
</template>
<style lang="less" scoped>
.v {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
.c_hero_j {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  .job {
    padding: 6px 14px;
    border-radius: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  .active {
    background-color: var(--hero-card-background);
    color: var(--hero-card-text-light);
  }
}
.h-c {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
