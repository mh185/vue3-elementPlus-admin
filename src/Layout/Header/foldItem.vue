<template>
  <div>
    <i class="el-icon-s-fold icon" @click="double" v-if="!type"></i>
    <i class="el-icon-s-unfold icon" @click="double" v-else></i>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, toRefs } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  name: "Fold",
  setup() {
    const store = useStore();
    const reactiveData = reactive({
      type: computed(() => store.state.numFactoryModule.type),
    });
    const double = () => {
      store.commit("numFactoryModule/DOUBLE_COUNT");
    };
    return {
      ...toRefs(reactiveData),
      double,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0.25rem;
  cursor: pointer;
  line-height: 60px;
}
</style>
