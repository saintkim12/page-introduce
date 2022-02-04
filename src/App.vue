<script setup lang="ts">
// https://swiperjs.com/demos
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Mousewheel, Keyboard, Pagination, Scrollbar } from 'swiper';
// Import Swiper Vue.js components
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';

const onSwiper = (swiper: SwiperClass) => {
// const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
// const modules = [Navigation, Pagination, Scrollbar, A11y]
const swiperProps = {
  // direction: 'vertical' as const, // https://stackoverflow.com/a/55387357
  direction: <const> 'vertical',
  mousewheel: true,
  keyboard: true,
  pagination: { clickable: true },
  // scrollbar: { hide: true },
  modules: [Mousewheel, Keyboard, Pagination, Scrollbar],
  onSwiper,
  onSlideChange,
}

const slides: string[] = [
  /* html */`
    <div>
      Hello! I'm @saintkim12.<br>
      I'm Web Developer.
    </div>
  `,
  'Slide_2',
  'Slide_3',
  'Slide_4',
  'Slide_5',
  'Slide_6',
  'Slide_7',
  'Slide_8',
  'Slide_9',
]
</script>

<template>
    <!-- direction="vertical" -->
  <swiper
    v-bind="swiperProps"
  >
      <!-- {{ text }} -->
    <swiper-slide v-for="(html, idx) in slides" :key="idx" v-html="html">
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
