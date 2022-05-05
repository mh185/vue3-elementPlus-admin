<template>
  <el-button
    type="primary"
    class="cutBtn"
    @click="$i18n.locale = $i18n.locale === 'zh' ? 'en' : 'zh'"
    >切换语言</el-button
  >
  <el-descriptions :title="$t(`message.title`)">
    <el-descriptions-item :label="$t(`message.name`)">{{
      $t(`message.nameValue`)
    }}</el-descriptions-item>
    <el-descriptions-item :label="$t(`message.phone`)"
      >18100000000</el-descriptions-item
    >
    <el-descriptions-item :label="$t(`message.sex`)">
      <el-tag size="small" type="success">{{ $t(`message.sexValue`) }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item :label="$t(`message.Remarks`)">
      <el-tag size="small">{{ $t(`message.School`) }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item :label="$t(`message.Address`)">{{
      $t(`message.AddressValue`)
    }}</el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.cutBtn {
  margin-bottom: 20px;
}
</style>