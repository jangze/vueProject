<template>
    <div class="homePage">
        <!-- <div> -->
        <el-container class="el-container">
            <el-aside width="300px" style="background-color:#545c64;">
                <div class="header">
                    <h1 style="background-color:#545c64;font-size:26px;">医疗实体识别系统</h1>
                </div>
                <el-menu router default-active="/homePage/nerModel" background-color="#545c64" text-color="white" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-menu-item index='/homePage/nerModel'>
                        <i class="el-icon-search"></i>
                        <span slot="title" class="text_nav">实体识别</span>
                    </el-menu-item>
                  <el-menu-item index='/homePage/electicRecord'>
                    <i class="el-icon-search"></i>
                    <span slot="title" class="text_nav">电子病历</span>
                  </el-menu-item>
                    <el-menu-item index='/homePage/trainModel'>
                  <i class="el-icon-search"></i>
                  <span slot="title" class="text_nav">实体标注</span>
                </el-menu-item>
                    <el-menu-item index='3' @click="toLogin">
                        <i>
                            <svg t="1633615481975" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2414" width="18" height="18"><path d="M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z" fill="#3D3D3D" p-id="2415"></path></svg>
                        </i>
                        <span slot="title" class="text_nav">退出登录</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- <nermodel v-show="isShowNer"/>
                <trainmodel v-show="isShowTrain"/> -->
                <router-view :key="key"></router-view>
            </el-main>
        </el-container>
        <!-- <el-radio-group v-model="isCollapse" >
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <!-- </div> -->
    </div>
</template>
<script>
// import nermodel from '@/components/NerModel.vue'
// import trainmodel from '@/components/TrainModel.vue'

export default {
    name: 'homepage',
    // components: { nermodel, trainmodel },
    data () {
        return {
            isCollapse: false,
            inputText: '',
            outputText: '',
            indexMenu: 1
        }
    },
    computed: {
        key () {
            return this.$route.path
        }

    },
    methods: {
        toLogin () {
            this.$router.replace('/')
        },
        handleOpen () {
        },
        handleClose () {
        }
    }
}
</script>
<style scoped>
.homePage{
    /* position: absolute; */
    text-align: center;
    display: flex;
    justify-content: center;
    /* background-color:#545c64; */
}
.header{
    background-color:#545c64;
    color: white;
}
.el-menu-vertical-demo{
  height: 100vh;
  font-weight: bold;
}
.text_nav{
    font-size: 18px;
}
.input-area{
    margin: 30px 0px;
}
.input-item {
    min-width: 600px;
    max-width: 800px;
}
.el-container {
    /* border: 1px solid red; */
    /* max-width: 1200px; */
}
.el-button {
    margin: 20px 0px;
    /* position: relative; */
    float: right;
}
.icon {
    margin: 6px;
}
</style>
