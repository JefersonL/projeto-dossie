<template>
  <div id="fourth-sec">
    <b-container>
      <div class="fs-title text-center">
        <h2>Como adquirir?</h2>
        <p>
          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
          Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
      </div>
      <b-row align-v="center">
        <b-col class="fs-blc text-right">
          <p>
            Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
            accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Cras ultricies ligula sed magna dictum
            porta.
          </p>
          <b-button pill size="lg">Compre agora</b-button
          >
        </b-col>
        <b-col cols="6" class="ef-scale">
          <img :src="require('@/assets/img/watch-sec-4.png')" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#fourth-sec {
  background: rgb(1, 0, 22);
  padding: 8% 0;
  color: var(--txt-clr-white);
  .fs-title {
    padding-bottom: 2%;
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
    }
    p {
      font-size: 1.1rem;
      font-weight: 500;
      padding: 1.5% 18%;
    }
  }
  .fs-blc {
    padding: 2% 4%;
    p {
      font-size: 1.2rem;
    }
    button {
      margin-top: 5%;
      background: green;
      color: var(--txt-clr-white);
      font-weight: 700;
      border: none;
      box-shadow: 2px 2px 5px 2px rgba($color: #000, $alpha: 0.9),
        -2px -2px 5px 2px rgba($color: #fff, $alpha: 0.1);
      padding: 1.6% 10%;
    }
  }
  img {
    width: 90%;
  }
}
</style>
