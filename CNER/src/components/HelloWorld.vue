<template>
  <div class="hello">
    <div class="background"></div>
    <div class="zindex1">
      <h1>{{ msg }}</h1>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your NER Site'
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
.background{
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background:transparent url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20091227%2F271057191644.jpg&refer=http%3A%2F%2Fimg0.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635995871&t=92dcedd9ff94104085f91238c04e2271') center center no-repeat;
  background-size: 100%;
  filter:blur(3px);
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
  height: 260px;
  width: 400px;
}
</style>
