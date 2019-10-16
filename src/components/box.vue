<template>
 <div class="test-box">
   <slot name="box"></slot>
 </div>
</template>
 
<script>
export default {
  
}
</script>
 
<style lang="less" scoped>
  .test-box {
    height:600px;
    width:300px;
    border:1px solid #636363;
    box-shadow: 0px 0px 1px 4px rgba(0,0,0,.18);
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>