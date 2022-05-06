<template>
  <el-row class="card">
    <el-col :span="6"
      ><el-card class="cardName" shadow="always">
        <i class="iconfont icon-aviation"></i>
        今日访问：578
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card class="cardName" shadow="always">
        本月访问：2348
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card class="cardName" shadow="always">
        总访问量：21314
      </el-card></el-col
    >
  </el-row>
</template>

<script lang='ts'>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card {
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .cardName {
    height: 150px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>