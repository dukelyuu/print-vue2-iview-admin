<template>
    <div>
        <!--<p>{{message}}</p>-->
        <Steps ref="stepel" :current="current">
            <Step title="打印首页" @click="home"></Step>
            <!--<Step title="打印经营地块情况" @click="next"></Step>-->
            <Step title="打印经营地块情况(带总面积)" @click="next"></Step>
            <Step title="打印末页(经营地块情况带填表机关)" @click="next"></Step>
            <!--<Step title="打印末页" @click="next"></Step>-->
        </Steps>
    
        <div style="height:80%;">
            <router-view></router-view>
        </div>
        
        <div>
    
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0,
            message: "当前正在",
        }
    },
    methods: {
        prev() {
            if (this.current > 0) {
                this.current -= 1;
            }
        },
        next() {

            if (this.current < 3) {
                this.current += 1;
            }
        },
        home() {
            this.current = 0
        }
    },
    watch: {
        current: function (val, oldVal) {
            val = val == 3 ? 2 : val
            this.$router.push("/print/page" + val)
            val = val == 0 ? '首' : val
            val = val == 2 || val == 3 ? '末' : val
            this.message = "当前正在打印" + val + "页"


        }
    },
    mounted() {
        this.$router.push("/print/page" + this.current)
    }
}
</script>