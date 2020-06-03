<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookTitle from '@/components/ebook/EbookTitle'
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookMenu from '@/components/ebook/EbookMenu'
  export default {
    components: {
      EbookTitle,
      EbookReader,
      EbookMenu
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";
  .ebook {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
