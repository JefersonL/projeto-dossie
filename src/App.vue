<template>
  <div id="app-site">
    <div class="shadow-banner">
      <div id="back-grad">
        <header-item />
        <banner-item/>
      </div>
    </div>
    <main>
      <first-section />
      <second-section />
      <third-section/>
      <fourth-section/>
    </main>
    <footer-item />
  </div>
</template>

<script>
import HeaderItem from "./components/template/TheHeader.vue";
import BannerItem from "./components/sections/BannerSection.vue";
import FirstSection from "./components/sections/FirstSection.vue";
import SecondSection from "./components/sections/SecondSection.vue";
import ThirdSection from "./components/sections/ThirdSection.vue";
import FourthSection from "./components/sections/FourthSection.vue";
import FooterItem from "./components/template/TheFooter.vue";

export default {

  components: {
    HeaderItem,
    BannerItem,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FooterItem,
  },
};
</script>

<style lang="scss" scoped>
#app-site {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
.shadow-banner {
  filter: drop-shadow(7px 5px 2px rgb(0, 0, 0, 0.4));
}
#back-grad {
  background: linear-gradient(
    120deg,
    rgba(1, 0, 22, 1) 5%,
    rgba(4, 1, 55, 1) 24%,
    rgba(9, 9, 121, 1) 52%,
    rgba(0, 212, 255, 1) 100%
  );
  clip-path: polygon(
    15% 0%,
    85% 0%,
    100% 0%,
    100% 90.3%,
    87.7% 100%,
    29.9% 90.8%,
    0% 97.5%,
    0% 0%
  );
}
</style>
