<template>
<div>
     <p>{{message}}</p>
    <Steps ref="stepel" :current="current" >
        <Step title="打印首页" @click="home"></Step>
        <Step title="打印第2页" @click="next"></Step>
        <Step title="打印第3页" @click="next"></Step>
        <Step title="打印第4页" @click="next"></Step>
        <Step title="打印末页" @click="next"></Step>
    </Steps>
     <i-button type="primary" @click="prev">上一页</i-button>
    <i-button type="primary" @click="next">下一页</i-button>
    <i-button type="primary" @click="home">首页</i-button>
     <div>
     <router-view></router-view>
     </div>
    <div>
    

</router-link>
    </div>
    </div>

   
   
</template>
<script>
    export default{
        data(){
            return{
                current: 0,
                message: "当前正在",
                toPath: "/table"
              }
        },
        methods:{
            prev () {
                 if (this.current > 0) {
                    this.current -= 1;
                }
            },
            next () {
               
                 if (this.current < 4) {
                    this.current += 1;
                }
            },
            home () {
                this.current = 0
            }
        },
         watch:{
            current: function (val, oldVal) {
                val = val ==5 ? 4: val
                this.$router.push("/print/page" + val)
                val = val == 0? '首':val
                val = val == 4 || val == 5? '末':val
                this.message = "当前正在打印"+val+"页"
                
                
            }
        },
        mounted(){
             this.$router.push("/print/page" +  this.current)
        }
    }
</script>