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
  mounted() {
    console.log(process.env.BASE_URL);
    console.log(process.env.VUE_APP_BASE_URL);
  }
}
</script>>

<style lang="less">
</style>
