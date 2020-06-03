const book = {
  state: {
    fileName: '',
    ifShowTitleAndMenu: false
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_IFSHOWTITLEANDMENU: (state, ifShow) => {
      state.ifShowTitleAndMenu = ifShow
    }
  }
}
export default book
