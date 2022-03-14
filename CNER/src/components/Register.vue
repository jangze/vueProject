<template>
  <div class="hello">
    <background />
    <div class="zindex1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户注册</span>
      </div>
      <div class="">
        <el-select class="input-item" v-model="value" placeholder="请选择账户类型" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input
          class="input-item"
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="userAccount"
        >
        </el-input>
        <el-input
          class="input-item"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          show-password
          v-model="userPassword"
        >
        </el-input>
        <el-input
          class="input-item"
          placeholder="请再次输入密码"
          prefix-icon="el-icon-lock"
          show-password
          v-model="userPassword2"
        >
        </el-input>
      </div>
      <el-button class="login-button" type="primary" size="medium" @click='register'>
        立即注册并登录
      </el-button>
      <el-button type="text" size="small" @click="toLoginPage">
        已有账号？回到登录
      </el-button>
    </el-card>
    </div>
  </div>
</template>
<script>
import background from '@/components/Background.vue';
export default {
  components: { background },
  name: 'Register',
  data () {
    return {
      options: [{
        value: '医生',
        label: '医生'
      }, {
        value: '用户',
        label: '用户'
      }],
      value: '',
      userAccount: '',
      userPassword: '',
      userPassword2: ''
    };
  },
  methods: {
    toLoginPage () {
      this.$router.replace('/');
    },
    register () {
      this.$router.push('/homePage')
    },
    isValid () {
      return true
    }
  }
};
</script>
<style scoped>
.hello {
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
  top:42%;
  left: 49.5%;
  transform: translate(-50%, -50%);
}
h1{
  filter: drop-shadow(8px, 8px, 6px #333);
}
.box-card{
  text-align: center;
  height: 400px;
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
