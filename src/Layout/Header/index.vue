<template>
  <div class="header-con">
    <div class="fold">
      <foldItem />
    </div>
    <div class="setting">
      <userMessage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import foldItem from "./foldItem.vue";
import userMessage from "./userMessage.vue";

export default defineComponent({
  name: "Header",
  components: {
    foldItem,
    userMessage,
  },
});
</script>

<style lang="scss" scoped>
.header-con {
  position: relative;
  .fold {
    display: inline-block;
    position: absolute;
    left: 0;
  }
  .setting {
    position: absolute;
    right: 0;
    display: flex;
    line-height: 60px;
    .Setting {
      width: 0.625rem;
      text-align: center;
    }
  }
}
</style>
