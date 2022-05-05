<template>
  <ul class="icon">
    <li
      v-for="(item, index) in glyphs"
      :key="index"
      @click="useCopeChange(item.className)"
    >
      <i :class="item.className"></i>
      <span>{{ item.className }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import ListCon from "@/assets/font/iconfont.json";
import useCope from "@/hooks/useCope";
import { ElNotification } from "element-plus";
export default {
  setup() {
    let { css_prefix_text, font_family, glyphs } = ListCon;
    glyphs.map((v: any) => {
      v.className = font_family + " " + css_prefix_text + v.font_class;
    });
    function useCopeChange(val: any) {
      let conName = `<i class="${val}"></i>`;
      let con = useCope(conName);
      ElNotification({
        title: "复制成功",
        dangerouslyUseHTMLString: true,
        offset: 100,
        message: `${con}`,
        type: "success",
      });
    }
    return {
      glyphs,
      useCopeChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 12.5%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 10px;
    .iconfont {
      font-size: 28px;
    }
    span {
      text-align: center;
      width: 90%;
      margin-top: 10px;
      color: #a9a9a9;
      font-size: 14px;
    }
  }
  li:hover {
    background-color: #333;
    color: #fff;
    box-shadow: 10px 10px 5px #888888;
    .iconfont {
      transform: scale(1.4);
    }
    span {
      color: #fff;
    }
  }
}
</style>