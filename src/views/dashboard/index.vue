<template>
  <card />
  <div id="main" style="width: 100%; height: 400px"></div>
</template>

<script lang="ts">
//  按需引入 echarts
import * as echarts from "echarts";
import card from "./card/index.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    card,
  },
  setup() {
    onMounted(() => {
      init();
    });
    function init(): void {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(
        document.getElementById("main") as HTMLElement
      );
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
}
</style>