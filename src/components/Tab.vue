<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-icon07"></i>
        <span>列表页</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-collect"></i>
        <span>收藏页</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjiasucai "></i>
        <span>添加页</span>
      </router-link>
    </nav>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
nav {
  display: flex;
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  height:60px;
  border-top: 1px solid #ccc;
  align-items: center;
  a {
    i {
      font-size: 18px;
    }
    display: flex;
    flex:1;
    flex-direction:column;
    align-items: center;
  }
  .active {
    color: #ff5600;
  }
}
</style>
