<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['test'])
  },
  methods: {
    fn() {
      return {
        a: 1,
        b: 2
      }
    }
  },
  mounted() {
    this.$store.dispatch('setTest', 48).then(() => {
      /* console.log(this.$store.state.book.test) */
      console.log(this.test)

      console.log({ ...this.fn(), c: 4, d: 5 })
    })
  }
}
</script>
<style>

</style>
