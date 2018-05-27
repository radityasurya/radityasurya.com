<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import header from "~/components/Header";

export default {
  components: {
    "app-header": header
  }
};
</script>


<style lang="scss" scoped>
body {
  margin: 0;
}

.el-header,
.el-footer {
  background-color: #ffffff;
  color: #000;
  text-align: center;
  line-height: 60px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
