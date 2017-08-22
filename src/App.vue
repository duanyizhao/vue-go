<template>
    <div>
      <!--缓存页面-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <tab></tab>
    </div>
</template>

<script>
  import Tab from 'components/Tab'
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {
          Tab
        }
    }
</script>

<style scoped>

</style>
