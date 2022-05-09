<template>
    <header id="header-item">
      <b-container>
        <b-row align-v="center">
          <b-col cols="2">
            <img :src="require('@/assets/img/logo.png')" />
          </b-col>
          <b-col>
              <b-nav id="hi-menu-item">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
              </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header-item {
  padding: 20px 0;
    .container{
      align-items: center;
    }
    img{
      width: 250px;
    }
    #hi-menu-item{
      justify-content: end;
      li a{
        color: var(--txt-clr-white);
        font-size: 18px;
        font-weight: 500;
        margin: 0 20px;
        padding: 5px;
        transition: .3s;
        height: 40px;
          &:hover{
            border-bottom: 2px solid #fff;
            transform: scale(1.1);
          }
          &.active{
          font-weight: 800;
          }
      }
    }
}
</style>
