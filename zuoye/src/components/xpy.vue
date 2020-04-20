<template>
    <div>
     <div v-for="(item,i) in list" :key="i" class="div1" @click="dj(i)">
         <img :src="item.pic" alt="">
         <p>{{item.title}}</p>
         <p><span>￥{{item.old_price}}</span><span>￥<s>{{item.price}}</s></span></p>
     </div>
     <div v-show="!show" class="div2">
         <button>添加</button>
     </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           list:[],
           show:true
        };
    },
    created() {

    },
    mounted() {
       this.axios.get('../../static/list.json').then((res)=>{
            this.list = res.data.result
            console.log(this.list)
        })
    },
    methods: {
       dj(i){
           this.show=!this.show
       }
    }
};
</script>

<style scoped>
.div1{
    width: 45%;
    height: 300px;
    float: left;
    
}
img{
    width: 80px;
    height: 155px;
}
.div2{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    zoom: 10000;
}
</style>
