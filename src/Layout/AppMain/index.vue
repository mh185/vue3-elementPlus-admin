<template>
  <section class="app-main">
    <router-view :key="key" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "AppMain",
  setup() {
    const router: any = useRouter;
    function key() {
      return router.path;
    }
    return {
      key,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow-y: scroll;
  // overflow-x: hidden;
  box-shadow: 0px 0px 5px#FFC0CB;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #78b4b4;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
</style>
