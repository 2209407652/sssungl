<script lang="ts" setup>
/** Props */
interface SectionPartProps {
    imgUrl: string
}
const props = withDefaults(defineProps<SectionPartProps>(), {
    imgUrl: ''
})

</script>
<template>
    <section class="h-full w-full top-0 fixed invisible will-change-transform">
        <div class="outer w-full h-full overflow-y-hidden will-change-transform">
            <div class="inner w-full h-full overflow-y-hidden will-change-transform">
                <div class="bg home-bg" :class="[props.imgUrl]">
                    <div class="z-[2]">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>