<template>
    <div>
        <h3 @click="zu">< 搜索</h3>
    <input type="text" v-model="txt">
    <ul v-for="item in arr">
        <li>{{item}}</li>
    </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            txt:"",
            list:[],
        };
    },
    computed: {

        // 模糊搜索
        arr(){
            if(this.txt){
                return this.list.result.filter(item =>{
                    return item.title.includes(this.txt)
                })
            }
         
        }
          
        
        
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
       zu(){
           this.$router.push('/')
       }
    }
};
</script>

<style scoped>

</style>
