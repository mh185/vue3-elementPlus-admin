<template>
  <header>
    <upload-excel
      class="upload-excel"
      @gainList="reception"
      :headerList="useHeader"
    ></upload-excel>
    <el-button class="excel-btn" type="primary" @click="excelDemo"
      >Excel模板</el-button
    >
  </header>
  <el-table class="table" :data="tableList" border style="width: 100%">
    <el-table-column
      v-for="(book, key, index) in tableList[0]"
      :key="index"
      :prop="key"
      :label="key"
      align="center"
    >
    </el-table-column>
  </el-table>
</template>

<script lang='ts'>
import UploadExcel from "@/components/uploadExcel/index.vue";
import { reactive, toRefs } from "@vue/reactivity";
/**
 * @function gainList @callback Array<object>
 * @function headerList @param object 自定义表头 不传则默认表头
 */
export default {
  components: {
    UploadExcel,
  },
  setup() {
    const preson = reactive({
      tableList: [] as Array<object>,
      useHeader: {
        副环: "subloopNumber",
        昵称: "name",
        性别: "sex",
        类别: "type",
        出壳时间: "birthdate",
        羽色: "doveGray",
        眼砂: "sandHole",
        来源: "source",
      },
    });
    function reception(val: Array<object>) {
      preson.tableList = val;
    }
    function excelDemo() {
      window.open(
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-201d7d1b-d463-4f91-8946-6d0f6581a344/0196f237-3f91-49f8-a6ff-6fc31f31c7c5.xlsx"
      );
    }
    return { reception, ...toRefs(preson), excelDemo };
  },
};
</script>
<style lang="scss" scoped>
header {
  overflow: hidden;
  .upload-excel {
    float: left;
  }
  .excel-btn {
    float: right;
  }
}
.table {
  margin-top: 20px;
}
</style>