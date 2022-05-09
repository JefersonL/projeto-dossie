<template>
  <div id="banner-item">
    <b-container>
      <b-row align-v="center">
        <b-col>
          <h1>O melhor relógio digital para o seu dia a dia</h1>
          <b-button pill size="lg" variant="light">Saiba Mais</b-button>
        </b-col>
        <b-col class="bi-img-config ef-float">
          <img :src="require('@/assets/img/watch.png')" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#banner-item {
  height: 600px;
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-bottom: 6%;
  }
  h1 {
    color: var(--txt-clr-white);
    font-size: 3.6rem;
    font-weight: 800;
  }
  button {
    margin-top: 5%;
    color: rgba(9, 9, 121, 1);
    font-weight: 700;
    border: none;
    box-shadow: 2px 2px 5px 2px rgba($color: #000, $alpha: 0.9),
                -2px -2px 5px 2px rgba($color: #fff, $alpha: 0.3);
    padding: 1% 10%;
  }
  .bi-img-config {
      display: flex;
      justify-content: center;
    img {
      width: 60%;
    }
  }
}
</style>
