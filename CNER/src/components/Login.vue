<template>
  <div class="hello">
    <!-- <div class="background"></div> -->
    <background/>
    <div class="zindex1">
      <h1>{{ msg }}</h1>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户登录</span>
        </div>
        <div class="">
          <el-input
            class="input-item"
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
            v-model="userAccount">
          </el-input>
          <el-input
            class="input-item"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
            v-model="userPassword">
          </el-input>
        </div>
        <el-button
          class="login-button"
          type="primary"
          size="medium"
          @click="login"
        >
          立即登录
        </el-button>
        <el-button
          type="text"
          size='small'
          @click="toRegister">
          没有账号？点击注册
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import background from '@/components/Background.vue'
// import Background from './Background.vue'
export default {
  components: { background },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your NER Site',
      userAccount: '',
      userPassword: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/homePage')
    },
    toRegister () {
      this.$router.replace('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  border: 1px solid transparent;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
}
.zindex1{
  position: fixed;
  z-index: 2;
  top:40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1{
  filter: drop-shadow(8px, 8px, 6px #333);
}
.box-card{
  text-align: center;
  height: 300px;
  width: 400px;
}
.clearfix{
  text-align: center;
  font-weight: bold;
}
.input-item{
  margin: 10px;
  width: 300px;
}
.login-button{
  margin-top: 25px;
  /* margin-bottom: 8px; */
  width: 300px;
}
</style>
