<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifShowTitleAndMenu">
      <div class="left">
        <span class="icon-back icon" @click="back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-person icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more icon"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '@/utils/mixin'
  export default {
    methods: {
      back() {
        console.log('back...')
      }
    },
    mixins: [ebookMixin]
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";
  .title-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 101;
    background: white;
    display: flex;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0 , 0, .15);
    .left {
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        .icon-shelf {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>
