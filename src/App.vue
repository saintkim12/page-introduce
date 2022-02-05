<script setup lang="ts">
// https://swiperjs.com/demos
// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Mousewheel, Keyboard, Pagination, Scrollbar } from 'swiper'
// Import Swiper Vue.js components
import { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ElFooter from '/src/components/ElFooter.vue'

const onSwiper = (swiper: SwiperClass) => {
// const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
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

</script>

<template>
  <!-- direction="vertical" -->
  <swiper
    v-bind="swiperProps"
  >
    <!-- {{ text }} -->
    <swiper-slide>
      <div>
        <h2>저는 웹 개발자 <strong>@saintkim12</strong>입니다.</h2>
        <p>웹 프론트엔드, 웹 백엔드 개발이 가능합니다.</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <h2>이런 개발자입니다</h2>
        <ul>
          <li>(최신) 프레임워크를 이용한 <strong>개발하기 편한</strong> 프로젝트/개발환경 직접 구축</li>
          <li>배포/운영을 편리하게(Jenkins, Docker 등) 하는 작업 등 개발에 부수적인 환경 구축에 능숙 및 관심있음(DevOps)</li>
          <li>공통화/컴포넌트화 등 프로젝트 코어 작업</li>
          <li>점진적인 코드 리팩토링/모던화</li>
        </ul>
        <h3>여기에 부합하지 않더라도, 저는 효율적인 개발을 위해 필요한 기술들을 익히고 변화해 나갑니다.</h3>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <h2 style="margin-bottom:0;">
          이런 걸 해왔습니다
        </h2>
        <h5 style="margin-top:.5rem;">
          (기술 스택)
        </h5>
        <ul>
          <li>버전 관리</li>
          <ul>
            <li>Git: 7/10</li>
            <li>svn: 5/10</li>
          </ul>
          <li>Java(Spring Boot): 8/10</li>
          <ul>
            <li>Gradle: 6/10</li>
            <li>Maven: 5/10</li>
          </ul>
          <li>HTML, CSS, SCSS(SASS): 8/10</li>
          <li>JavaScript: 9/10</li>
          <ul>
            <li>ES6↑: 8/10</li>
            <li>Vue.js 3: 8/10</li>
            <li>jQuery: 9/10</li>
            <li>React.js: 3/10</li>
          </ul>
          <li>Node.js: 6/10</li>
          <li>Docker: 6/10</li>
          <li>Jenkins: 6/10</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <h2>이런 환경에서 일하고 싶어요</h2>
        <ul>
          <li>개발에 도움되는 다양한 기술/라이브러리/프로세스의 도입을 장려</li>
          <ul>
            <li>TypeScript</li>
            <li>코드 리뷰</li>
            <li>테스트</li>
            <li>etc</li>
          </ul>
          <li>개발에만 집중할 수 있는 환경</li>
          <li>불필요한 프로세스가 없음</li>
          <ul>
            <li>재택근무, 자율출퇴근제 등 허용</li>
          </ul>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <h2>Contact Me</h2>
        <ul>
          <li>E-Mail: <a href="mailto:saintkim1232@gmail.com">saintkim1232@gmail.com</a></li>
          <li>Github: <a href="https://github.com/saintkim12" target="_blank">https://github.com/saintkim12</a></li>
        </ul>
        <p><a href="https://saintkim12.github.io">Main</a></p>
      </div>
      <ElFooter />
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

.swiper-slide li {
  text-align: left;
}
</style>
