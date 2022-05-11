<template>
  <el-upload
    class="upload-demo"
    action=""
    drag
    :auto-upload="false"
    :on-change="uploadChange"
    :limit="1"
  >
    <el-icon class="el-icon--upload upload"><upload-filled /></el-icon>
    <div class="el-upload__text">拖入或点击上传</div>
    <template #tip>
      <div class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </template>
  </el-upload>
</template>

<script lang='ts'>
import * as XLSX from "xlsx";
import { UploadFilled } from "@element-plus/icons-vue";
import { toRefs } from "@vue/reactivity";
export default {
  components: {
    UploadFilled,
  },
  name: "UploadExcel",
  props: ["headerList"],
  setup(props, { emit }) {
    let { headerList } = toRefs(props);
    const uploadChange = async (e: any) => {
      const files = e.raw;
      if (files.length <= 0) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files.name.toLowerCase())) {
        console.log("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }
      // 读取表格
      const fileReader = new FileReader();
      fileReader.onload = (ev: any) => {
        const workbook = XLSX.read(ev.target.result, {
          type: "binary",
        });
        const wsname = workbook.SheetNames[0];
        const ws: Array<object> = XLSX.utils.sheet_to_json(
          workbook.Sheets[wsname]
        );
        let val: any = null;
        if (
          headerList.value != undefined &&
          headerList.value != null &&
          headerList.value != {}
        ) {
          val = dealExcel(ws);
        } else {
          val = ws;
        }
        emit("gainList", val);
      };
      fileReader.readAsBinaryString(files);
    };
    // 表头转换
    function dealExcel(ws: any) {
      ws.forEach((sourceObj: any) => {
        Object.keys(sourceObj).map((keys) => {
          let newKey = headerList.value[keys];
          if (newKey) {
            sourceObj[newKey] = sourceObj[keys];
            delete sourceObj[keys];
          }
        });
      });
      return ws;
    }
    return { uploadChange };
  },
};
</script>
<style lang="scss" scoped>
.upload {
  font-size: 100px;
}
</style>