<template>
  <el-input class="title" v-model="title" placeholder="导出名称"></el-input>
  <el-button type="primary" class="download-btn" @click="download"
    >导出Excel</el-button
  >
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang='ts'>
import { reactive, toRefs } from "@vue/reactivity";
import useExcel from "@/hooks/useExcelDownload";
export default {
  setup() {
    const preson = reactive({
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "chongqing",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "chongqing",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "chongqing",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "chongqing",
        },
      ],
      header: "日期,名字,地址\n",
      title: "excel导出模板",
    });
    function download() {
      useExcel(preson.tableData, preson.header, preson.title);
    }

    return {
      ...toRefs(preson),
      download,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  width: 200px;
  margin-right: 10px;
}
.download-btn {
  margin-bottom: 20px;
}
</style>