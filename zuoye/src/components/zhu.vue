<template>
    <div>
      <input type="text" placeholder="收索商品" class="mzj-inp" @click="lis">
      <ul class="mzj-ul">
          <li  v-for="(item,i) in arr" :key="i" class="mzj-li">{{item.name}}</li>
      </ul>
      <div class="mzj-div">
            <xpy></xpy>
      </div>
      <ul  class="mzj-ul2">
          <li v-for="(item,i) in list" :key="i" class="mzj-li2">{{item.name}}</li>
      </ul>
    </div>
</template>

<script>
import xpy from '@/components/xpy'
export default {
    components:{
        xpy
    },
    data() {
        return {
            arr:[
                {name:"女装"},
                {name:"男装"},
                {name:"童装"},
                {name:"幼儿装"},
                {name:"运动"},
                {name:"限时特惠"},
                {name:"综合"},
                {name:"销量"},
                {name:"新品"},
                {name:"价格"}
            ],
            list:[
                {name:'首页'},
                {name:'分类'},
                {name:'购物车'},
                {name:'个人'},
            ]
          
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        lis(){
             this.$router.push('list')
        },
        id(){
            
        }
    }
};
</script>

<style scoped>
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
   .mzj-inp{
       width: 80%;
       border-radius: 50px;
       margin-left: 10%;
   }
   .mzj-ul{
       width: 100%;
   }
   .mzj-li{
       float: left;
       width: 15%;
       font-size: 14px;
   }
   .mzj-ul2{
       width: 100%;
       position: fixed;
       bottom: 0;
   }
   .mzj-li2{
       width: 25%;
       float: left;
   }
   .mzj-div{
       width: 100%;
       /* border: 1px solid red; */
       height: 500px;
       position: absolute;
       top: 105px;
   }
 
</style>
