<template>
  <div v-for="(item, index) in items" :key="index">
    <div v-if="!item.hidden">
      <el-submenu
        :index="item.path"
        :key="item.index"
        v-if="item.children.length > 1"
        popper-append-to-body
      >
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="(itemTwo, index) in item.children" :key="index">
          <el-menu-item v-if="!itemTwo.children" :index="itemTwo.path">
            <i :class="itemTwo.meta.icon"></i>
            <template #title>{{ itemTwo.meta.title }}</template>
          </el-menu-item>
          <el-submenu v-else :index="itemTwo.path">
            <template #title
              ><i :class="itemTwo.meta.icon"></i
              >{{ itemTwo.meta.title }}</template
            >
            <el-menu-item
              v-for="(itemThree, index) in itemTwo.children"
              :key="index"
              :index="itemThree.path"
            >
              <template #title>{{ itemThree.meta.title }}</template>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-submenu>
      <el-menu-item
        v-for="(itemTwo, index) in item.children"
        :key="index"
        v-else
        :index="itemTwo.path"
      >
        <i :class="itemTwo.meta.icon"></i>
        <template #title>{{ itemTwo.meta.title }}</template>
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const items = router.options.routes;
    return {
      items,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
