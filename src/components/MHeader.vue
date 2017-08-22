<template>
    <div class="header">
      {{title}}
    </div>
</template>

<script>
    export default {
        props:['title'],
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped>
.header {
  height:40px;
  line-height:40px;
  text-align: center;
  background-color: #FEFEFE;
  color: #666;
}
</style>
