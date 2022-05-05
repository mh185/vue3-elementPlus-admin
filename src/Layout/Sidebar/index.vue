<template>
  <div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      :collapse="isCollapse"
      :unique-opened="true"
      router
    >
      <SidebarItem />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
export default {
  components: {
    SidebarItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const isCollapse = computed(() => store.state.numFactoryModule.type);
    const onRoutes = computed(() => {
      return route.path;
    });
    // watch(
    //   route,
    //   (newVal: any, oldValue: any) => {
    //     document.title = newVal.meta.title;
    //   },
    //   { immediate: true }
    // );

    return {
      isCollapse,
      onRoutes,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  border-right-width: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
