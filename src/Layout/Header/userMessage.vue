<template>
  <div class="content">
    <el-menu mode="horizontal" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template #title
          ><el-avatar class="avatar" :src="buddha" size="small"></el-avatar>
          <span class="userName">admin</span></template
        >
        <el-menu-item index="1-1" @click="detrusion">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { removeToken } from "@/until/auth";
import buddha from "@/assets/buddha.jpg";
export default defineComponent({
  setup() {
    const router = useRouter();
    function detrusion() {
      removeToken();
      router.push({
        path: "/login",
      });
    }
    return {
      buddha,
      detrusion,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0.125rem;
  box-sizing: border-box;
  .userName {
    font-size: 0.175rem;
    padding-left: 0.125rem;
  }
  .avatar {
    width: 40px;
    height: 40px;
  }
}
.el-submenu__title:hover {
  background-color: rgb(3, 19, 33) !important;
}
</style>
