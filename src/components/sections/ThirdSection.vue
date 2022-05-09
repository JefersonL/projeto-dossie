<template>
  <div id="third-sec">
    <b-container>
      <div class="ts-title text-center">
        <h2>Recursos Atrativos</h2>
        <p>
          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
          Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
      </div>
      <b-row class="mt-5">
        <!-- Primeiro Bloco (Lado esquerdo) -->
        <b-col class="ts-cont-config text-right" cols="4">
          <b-row class="ts-blc" align-v="center">
            <b-col>
              <h4>Monitor Cardíaco</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col cols="3">
                <img :src="require('@/assets/img/heart.png')" alt="Alarme">
            </b-col>
          </b-row>
          <b-row class="ts-blc" align-v="center">
            <b-col>
              <h4>Alarme</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col cols="3">
                <img :src="require('@/assets/img/sino.png')" alt="Alarme">
            </b-col>
          </b-row>
          <b-row class="ts-blc" align-v="center">
            <b-col>
              <h4>Contador de Distância</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col cols="3">
                <img :src="require('@/assets/img/location.png')" alt="Alarme">
            </b-col>
          </b-row>
        </b-col>
        <!-- Fim Primeiro Bloco (Lado esquerdo) -->
        <!-- Segundo Bloco (Centralizado) -->
        <b-col class="ts-central-img" cols="4">
          <img
            :src="require('@/assets/img/watch-sec-3.png')"
            alt="Image-Watch"
          />
        </b-col>
        <!-- Fim Segundo Bloco (Centralizado) -->
        <!-- Terceiro Bloco (Lado direito) -->
            <b-col class="ts-cont-config text-left" cols="4">
          <b-row class="ts-blc" align-v="center">
            <b-col cols="3">
                <img :src="require('@/assets/img/bluetooth.png')" alt="Alarme">
            </b-col>
            <b-col>
              <h4>Bluetooth</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
          <b-row class="ts-blc" align-v="center">
            <b-col cols="3">
                <img :src="require('@/assets/img/cloudy.png')" alt="Alarme">
            </b-col>
            <b-col>
              <h4>Atualização de Tempo</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
          <b-row class="ts-blc" align-v="center">
            <b-col cols="3">
                <img :src="require('@/assets/img/video-call.png')" alt="Alarme">
            </b-col>
            <b-col>
              <h4>Chamada de Vídeo</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <!-- Fim Terceiro Bloco (Lado direito) -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#third-sec {
  color: var(--txt-clr-white);
  padding: 6% 0;
  margin-top: -4.2%;
  z-index: 0;
  background: url('../../assets/img/back-ts.jpg'), rgba(4, 1, 55, 0.95);
  background-blend-mode: overlay;
  background-size: cover;
  background-attachment: fixed;
  .ts-title {
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
.ts-central-img{
    display: flex;
    align-items: center;
    img{
        width: 100%;
    }
}
.ts-cont-config{
    img{
        width: 90%;
    }
}
.ts-blc{
    padding: 2%;
}
}

</style>
