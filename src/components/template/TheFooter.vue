<template>
  <div id="footer-item">
    <b-container>
      <b-row align-v="center">
      <b-col class="d-flex justify-content-center"> 
        <img :src="require('@/assets/img/logo-footer.png')" />
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer-item {
  padding: 1%;
  box-shadow: inset 2px 0 12px 4px rgba($color: #000, $alpha: 0.7),
              inset -2px -2px 4px 2px rgba($color: #fff, $alpha: 0.9);
  img{
    width: 20%;
  }
}
</style>
