<template>
    <div class="background"></div>
</template>
<script>
export default {
    name: 'background'
}
</script>
<style scoped>
.background{
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background:transparent url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20091227%2F271057191644.jpg&refer=http%3A%2F%2Fimg0.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635995871&t=92dcedd9ff94104085f91238c04e2271') center center no-repeat;
  background-size: 100%;
  filter:blur(3px);
}
</style>
