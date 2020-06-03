import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'ifShowTitleAndMenu'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setIfShowTitleAndMenu'
    ])
  }
}
