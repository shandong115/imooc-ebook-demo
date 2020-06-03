const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setIfShowTitleAndMenu: ({ commit }, ifShow) => {
    return commit('SET_IFSHOWTITLEANDMENU', ifShow)
  }
}

export default actions
