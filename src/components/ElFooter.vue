
<script setup lang="ts">
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import { ref, onMounted, nextTick } from 'vue'

const stackTooltip = ref()
const instance = ref()
onMounted(async () => {
  await nextTick()
  const makeAnchorTagHTML = (title: string, href: string): string => `<a href="${href}" target="_blank" class="tooltip-link">${title}</a>`
  instance.value = tippy(stackTooltip.value, {
    // trigger: 'click',
    interactive: true,
    appendTo: () => document.body,
    allowHTML: true,
    content: /* html */`
      <div class="tooltip-wrap">
        <h5 style="margin-bottom: .5rem;">Stacks</h5>
        <p>${makeAnchorTagHTML('Vue.js 3', 'https://v3.ko.vuejs.org/')} with ${makeAnchorTagHTML('vitejs', 'https://vitejs.dev/')}</p>
        <p>${makeAnchorTagHTML('TypeScript', 'https://www.typescriptlang.org/')}</p>
        <p>${makeAnchorTagHTML('Swiper', 'https://swiperjs.com/')}</p>
        <p>${makeAnchorTagHTML('fontawesome', 'https://fontawesome.com/')}</p>
        <p>${makeAnchorTagHTML('tippy.js', 'https://atomiks.github.io/tippyjs/')}</p>
      </div>`,
  })
})
</script>

<template>
  <footer>
    <!-- <p>이 페이지는 다음과 같은 기술로 작성되었습니다.</p> -->
    <p>© 2022 saintkim12. All Rights Reserved.</p>
    <p
      ref="stackTooltip"
      style="margin-left: .3rem; cursor: pointer;"
    >
      <i class="fas fa-info" />
    </p>
    <p>
      <a
        href="https://github.com/saintkim12/page-introduce"
        title="Repository of This Page"
      ><i class="fas fa-code" /></a>
    </p>
    <p>
      <a
        href="mailto:saintkim1232@gmail.com"
        title="E-Mail"
      ><i class="fas fa-envelope" /></a>
    </p>
    <p>
      <a
        href="https://github.com/saintkim12"
        title="Github"
      ><i class="fab fa-github" /></a>
    </p>
    <p>
      <a
        href="https://saintkim12.github.io"
        title="Main"
      ><i class="fas fa-home" /></a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  left: 0;
  bottom: 0;
  color: #888;
  font-size: .8rem;
  padding: 1rem 0;
  & > * {
    margin: 0 .4rem;
  }
  a {
    color: inherit;
  }
}
</style>
<style>
@import url('@fortawesome/fontawesome-free/css/all.min.css');
a.tooltip-link {
  color: white;
}
.tooltip-wrap > * {
  margin-top: 0;
  margin-bottom: 0;
}
</style>