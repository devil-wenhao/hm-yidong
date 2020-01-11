<template>
  <div class="container">
    <!-- 可以采用vant得导航组件 来实现 -->

    <van-nav-bar v-if="showNavBar" title="青冥快报" fixed right-text="搜索" @click-right="$router.push('/search')"></van-nav-bar>
    <div class="my-wrapper" :class="{ noTop: !showNavBar}">
      <router-view></router-view>
    </div>
    <!-- 标签栏   开启路由模式 -->
    <van-tabbar route>
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
        <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    // 是否显示navbar
    showNavBar () {
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
