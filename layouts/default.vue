<template>
  <div>
    <app-header></app-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer><p>Designed and Coded by <a href="https://radityasurya.com/">Raditya Surya Pratama</a></p></el-footer>
  </div>
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

.el-footer {
  background-color: #ffffff;
  color: #000;
  text-align: center;
  p {
    line-height: 60px;
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
