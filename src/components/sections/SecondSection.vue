<template>
  <div id="second-sec">
    <b-container>
      <b-row align-v="center">
        <b-col class="ef-float">
          <img
            :src="require('@/assets/img/watch-sec-2.png')"
            alt="Imagem-Watch2"
          />
        </b-col>
        <!-- Bloco Vantagens (Texto)-->
        <b-col>
          <h3>Um relógio pode tornar sua vida fácil e rápida.</h3>
          <b-row class="ss-bl-config">
            <b-col>
                <img :src="require('@/assets/img/sino.png')" alt="Alarme">
              <h4>Alarme</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col>
                <img :src="require('@/assets/img/bubble-chat.png')" alt="Alarme">
              <h4>Chat Ao Vivo</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
          <b-row class="ss-bl-config">
            <b-col>
                <img :src="require('@/assets/img/camera.png')" alt="Alarme">
              <h4>Camêra</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col>
                <img :src="require('@/assets/img/sinal-wifi.png')" alt="Alarme">
              <h4>Suporte Wi-FI</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <!-- Final Bloco Vantagens (Texto)-->
      </b-row>
      <b-row align-v="center" class="mt-5">
        <!-- Bloco Vantagens (Texto)-->
        <b-col>
          <h3>Um relógio pode tornar sua vida fácil e rápida.</h3>
          <b-row class="ss-bl-config">
            <b-col>
                <img :src="require('@/assets/img/sino.png')" alt="Alarme">
              <h4>Alarme</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col>
                <img :src="require('@/assets/img/bubble-chat.png')" alt="Alarme">
              <h4>Chat Ao Vivo</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
          <b-row class="ss-bl-config">
            <b-col>
                <img :src="require('@/assets/img/camera.png')" alt="Alarme">
              <h4>Camêra</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
            <b-col>
                <img :src="require('@/assets/img/sinal-wifi.png')" alt="Alarme">
              <h4>Suporte Wi-FI</h4>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec sollicitudin molestie malesuada.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <!-- Final Bloco Vantagens (Texto)-->
        <b-col class="ef-float">
          <img
            :src="require('@/assets/img/watch-sec-2-1.png')"
            alt="Imagem-Watch2"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#second-sec {
  padding: 10% 0;
  color: var(--txt-clr-white);
  background: rgb(1, 0, 22);
  clip-path: polygon(
    27.7% 0%,
    87.4% 3.4%,
    100% 0%,
    100% 97.3%,
    88.3% 100%,
    27.7% 96.5%,
    0% 100%,
    0% 3.3%
  );
  img {
    width: 75%;
  }
  h3 {
    margin-bottom: 5%;
    font-size: 2.6rem;
    font-weight: 700;
  }
  .ss-bl-config {
    padding: 2%;
    img{
        width: 35%;
        padding: 1rem;
    }
  }
}
</style>
