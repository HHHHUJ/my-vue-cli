<template>
  <div id="app">
    <div id="nav">
      <a href="/user">用户</a>
      <a href="/info">信息</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  },
  mounted() {
    console.log(process.env.BASE_URL);
    console.log(process.env.VUE_APP_BASE_URL);
    console.log(this.msg);
  }
}
</script>>

<style lang="less">
#nav {
  color:red;
}
</style>
