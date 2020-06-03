<template>
  <div class="ebook-menu">
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': !ifShowTitleAndMenu}" v-show="ifShowTitleAndMenu">
        <div class="icon-wrapper">
          <span class="icon-menu icon" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { ebookMixin } from '@/utils/mixin'
  export default {
    mixins: [ebookMixin],
    methods: {
      showSetting() {

      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";
  .ebook-menu {
    .menu-wrapper{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: px2rem(48);
      z-index: 101;
      display: flex;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
      &.hide-box-shadow {
        box-shadow: none
      }
      background: white;
      .icon-wrapper {
        flex: 1;
        @include center;
        .icon-progress .icon-bright {
          font-size: px2rem(28);
        }
      }
    }
  }
</style>
