import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: auth.getUser()
  },
  mutations: {
    upsateUser (state, payload) {
      // 更新数据
      state.user = payload.user
      // 将数据同步设置到本地存储中
      auth.setUser(payload.user)
    },
    // 清空user
    clearUser (state) {
      state.user = {}
      // 将缓存中得数据也清除
      auth.delUser()
    }
  },
  actions: {
  },
  modules: {
  }
})
