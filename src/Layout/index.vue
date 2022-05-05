<template>
  <div>
    <el-container>
      <Sidebar class="Sidebar" />
      <el-container>
        <el-header><Header /></el-header>
        <el-main><AppMain /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import AppMain from "./AppMain/index.vue";
import Sidebar from "./Sidebar/index.vue";
import Header from "./Header/index.vue";
export default {
  components: {
    AppMain,
    Sidebar,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
}
.el-aside {
  background-color: #545c64;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.Sidebar {
  background-color: #333;
}
</style>
