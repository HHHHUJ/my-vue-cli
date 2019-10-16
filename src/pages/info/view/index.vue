<template>
  <div>
    <a href="/user">用户</a><br />
    <a href="/info">信息</a>

    <ve-line :data="chartData1"
             width="800px"
             height="500px"
             :settings="chartSettings"></ve-line>
    <ve-ring :data="chartData2">

    </ve-ring>
    <box id="big-box" ref="big-box">
      <template v-slot:[name]>
        <div class="parent-box"  v-for="item in 20" :key="item" ref="small-box">
          hello world
        </div>
      </template>
    </box>
    <div class="toTop" @click="goTop" ref="normal-ele">to top</div>
  </div>
</template>
 
<script>
import box from "@/components/box";
function goTop() {
  document.getElementById('big-box').scrollTo({
    top:0,
    behavior:"smooth"
  })
}
export default {
  data() {
    this.chartSettings = {
      dimension: ["日期"]
    };
    return {
      chartData1: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "2018-05-22", 访问用户: 32371, 下单用户: 19810 },
          { 日期: "2018-05-23", 访问用户: 12328, 下单用户: 4398 },
          { 日期: "2018-05-24", 访问用户: 92381, 下单用户: 52910 }
        ]
      },
      chartData2: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      },
      name: 'box'
    };
  },
  components: {
    box
  },
  mounted() {
    var parent = {
      name:'大头',
      isHuman:false,
      hisName:function() {
        console.log(`his father name is ${this.name},if he is ${this.isHuman}`)
      }
    };
    var child = Object.create(parent);
    child.name = '小头';
    child.hisName();
    function Cat(color) {
      this.color = color;
    }
    Cat.prototype.isColor = function() {
      console.log(this.color);
    }
    function Dog(color) {
      Cat.call(this,color);
    }
    Dog.prototype = Object.create(Cat.prototype);
    var cat = new Cat('red');
    var dog = new Dog('green');
    dog.isColor();
    console.log(dog)
  },
  methods: {
    goTop
  }
};
</script>
 
<style lang="less" scoped>
  .toTop {
    width:80px;
    height:80px;
    border:1px solid #999999;
  }
  .parent-box {
    height:50px;
  }
</style>

