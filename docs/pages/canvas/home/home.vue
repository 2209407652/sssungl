<script lang="ts" setup>
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { onMounted, onUnmounted, ref } from 'vue';
import SectionPart from './components/SectionPart.vue';
gsap.registerPlugin(Observer);

/** 观察者实例 */
const observer = ref();

onMounted(() => {
    /** 定义变量 */
    let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating: boolean;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
        console.log(123123);

        index = wrap(index); // make sure it's valid
        animating = true;
        let fromTop = direction === -1,
            dFactor = fromTop ? -1 : 1,
            tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => (animating = false) as unknown as void
            });
        if (currentIndex >= 0) {
            // The first time this function runs, current is -1
            gsap.set(sections[currentIndex], { zIndex: 0 });
            tl.to(images[currentIndex], { yPercent: -15 * dFactor })
                .set(sections[currentIndex], { autoAlpha: 0 });
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

        tl.fromTo([outerWrappers[index], innerWrappers[index]], {
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, {
            yPercent: 0
        }, 0)
            .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        currentIndex = index;
    }

    observer.value = Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
    });
    gotoSection(0, 1);
})

onUnmounted(() => {
    observer.value.kill()
})
</script>
<template>
    <div role="main" class="m-0 p-0 h-screen text-slate-100 bg-slate-900">
        <!-- section 1 -->
        <SectionPart
            img-url="bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.4)_100%),url(/src/assets/homebg1.png)]">
            <template v-slot:content>
                <div class="w-[80vw] flex justify-between items-center">
                    <div class="space-y-5">
                        <h2>旗下开发产品</h2>
                        <p class="line-clamp-[10] overflow-hidden">随着人工智能技术的快速发展和应用，AI 服务已经成为各种行业和企业关注的焦点。AI
                            服务是一种利用机器学习、深度学习、自然语言处理等人工智能技术来实现自动化和个性化的业务服务的产品。它可以通过语音识别、图像识别、自然语言处理以及推荐系统等各种技术，分析和理解客户需求和行为，实现优化产品设计和流程管理，提升客户体验和业务效益的目标。
                            其中，语音识别服务可以帮助大众更便捷地操作设备，如通过语音命令控制播放音乐等；图像识别/分类服务则可以帮助企业高效完成产品质检、自动驾驶、智能安防等领域；自然语言处理服务则可以协助企业完成智能客服、舆情分析等业务；推荐系统服务则可以分析用户行为和偏好，精准推荐个性化产品和内容，广泛应用于电商、视频、新闻等行业。
                            通过集成这些AI 服务产品，企业可以更好地理解客户需求和行为，帮助企业实现针对客户需求和行为的个性化定制，从而提高客户满意度和忠诚度，优化产品质量和服务，提高企业效益和竞争力。</p>
                        <button
                            class="bg-green-700 hover:bg-green-600 transition-colors px-5 py-2 rounded-lg tracking-widest">联系我们</button>
                    </div>
                </div>
            </template>
        </SectionPart>
        <!-- section 2 -->
        <SectionPart
            img-url="bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.4)_100%),url(/src/assets/homebg2.jpg)]">
            <template v-slot:content>
                <div class="w-[80vw] flex justify-between items-center">
                    <div class="space-y-5">
                        <h2>我们提供的服务</h2>
                        <p class="line-clamp-[10] overflow-hidden">当今社会，人工智能技术正在迅速发展和普及，得到越来越广泛的应用和认可。作为其中的重要成果和产物，AI
                            服务已经成为了企业信息化建设和数字化转型的重要工具和手段。我们提供的 AI
                            服务旨在帮助企业通过智能化的方式，提升业务效益，客户体验和企业竞争力。
                            我们的AI服务包括但不限于自然语言处理，语音识别服务，图像识别/分类服务，推荐系统服务等等。我们的AI服务可以与您的业务系统集成，从而自动化处理、智能化分析和个性化推荐各种任务和流程。我们致力于为您提供高效、可靠、安全、稳定的AI服务，帮助您轻松实现数字化转型和智能化升级。无论您的企业处于哪个行业，我们都能为您提供量身定制的AI服务，让您的企业在数字化时代中始终保持领先的优势。
                        </p>
                        <button
                            class="bg-green-700 hover:bg-green-600 transition-colors px-5 py-2 rounded-lg tracking-widest">联系我们</button>
                    </div>
                </div>
            </template>
        </SectionPart>
        <!-- section 3 -->
        <SectionPart
            img-url="bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.4)_100%),url(/src/assets/homebg3.jpg)]">
            <template v-slot:content>
                <div class="w-[80vw] flex justify-between items-center">
                    <div class="space-y-5">
                        <h2>关于我们</h2>
                        <p class="line-clamp-[10] overflow-hidden">
                            我们团队由经验丰富的AI专家、数据科学家和软件开发人员组成，一直致力于为客户提供高质量的AI解决方案和服务。我们拥有一支前沿的研发团队，熟练掌握最新的人工智能技术和方法，可以根据客户的需求和特点，为其量身设计定制化的AI服务。我们的团队深入了解您的业务和需求，具备完整的开发流程和测试体系，以确保我们提供的解决方案和服务都符合最高标准和质量要求。
                            除此之外，我们的团队还非常注重与客户的沟通和合作。我们始终强调合作是成功的关键，因此我们的团队愿意与客户进行密切的合作，并积极收到客户的反馈，以不断优化和改进我们的AI服务。我们的团队坚信高品质、高效率、高可靠性和高安全性是我们服务的核心价值，我们将因此努力工作，不断提高服务质量和客户满意度。
                        </p>
                        <button
                            class="bg-green-700 hover:bg-green-600 transition-colors px-5 py-2 rounded-lg tracking-widest">联系我们</button>
                    </div>
                </div>
            </template>
        </SectionPart>
    </div>
</template>
<style scoped></style>