<template>
  <div id="first-sec">
    <b-container>
      <div class="fs-title text-center">
        <h2>Porque ele é o melhor?</h2>
        <p>
          Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam
          id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem.
        </p>
      </div>
      <b-row align-h="center">
        <b-card-group class="fs-cards text-center">
          <b-col>
            <b-card tag="article" style="max-width: 20rem" class="mb-2">
              <img
                :src="require('@/assets/img/design.png')"
                alt="Image-Design"
              />
              <h4>Design Interativo</h4>
              <b-card-text>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card tag="article" style="max-width: 20rem" class="mb-2">
              <img
                :src="require('@/assets/img/smartphone.png')"
                alt="Image-Smartphone"
              />
              <h4>Instale Aplicativos</h4>
              <b-card-text>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus suscipit tortor eget felis porttitor volutpat.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card tag="article" style="max-width: 20rem" class="mb-2">
              <img
                :src="require('@/assets/img/marcador-de-mapa.png')"
                alt="Image-Maps"
              />
              <h4>GPS Tracking</h4>
              <b-card-text>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus suscipit tortor eget felis porttitor volutpat.
              </b-card-text>
            </b-card>
          </b-col>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#first-sec {
  color: var(--txt-clr-normal);
  padding: 6% 0;
}
.fs-title {
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
.fs-cards {
  .card {
    background: #f5f5f5;
    min-height: 21rem;
    box-shadow: 6px 6px 8px -1px rgba(0, 0, 0, 0.2),
      -6px -6px 10px -1px rgba($color: #fff, $alpha: 1);
    transition: 0.2s;
    border: none;
    &:hover {
      //transform: scale(1.1);
      border-bottom: 4px solid;
      border-width: 4px;
      border-image-slice: 1;
      border-image-source: linear-gradient(
        to right,
        rgba(9, 9, 121, 1),
        rgba(0, 212, 255, 1)
      );
    }
  }
  img {
    margin: 10% 0;
  }
  .card-text {
    padding: 1rem 1.8rem;
  }
}
</style>
