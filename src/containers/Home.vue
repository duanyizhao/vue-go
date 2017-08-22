<template>
    <div>
      <m-header title="书城"></m-header>
      <!--轮播图组件-->
      <div v-if="sliders.length">
        <slider :data="sliders"></slider>
      </div>
      <h3>最新上架</h3>
      <ul class="hot">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="书籍">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <loading v-if="isLoading"></loading>
    </div>
</template>

<script>
  import MHeader from 'components/MHeader'
  import Slider from 'components/Slider'
  import {getSliders,getHot} from 'api'
  import Loading from 'components/Loading'
    export default {
        data() {
            return {
              sliders: [],
              hots: [],
              isLoading: true
            }
        },
        created(){
          getSliders().then(res=>{
            this.sliders = res.data;
          }).catch(err=>{
            console.log(err);
          });
          getHot().then(res=>{
            this.hots = res.data;
            this.isLoading = false
          }).catch(err=>{
            console.log(err);
          })
        },
        methods: {},
        computed: {},
        components: {
          MHeader,
          Slider,
          Loading
        }
    }
</script>

<style scoped lang="less">
  .hot {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      width:33.333%;
      img {
        width:100%;
      }
    }
  }
</style>
