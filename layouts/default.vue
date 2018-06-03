<template>
  <div>
    <app-header></app-header>
    <el-main>
      <div class="container">
        <nuxt/>
      </div>
    </el-main>
    <el-footer>
      <p>Designed and Coded by <a href="https://radityasurya.com/">Raditya Surya Pratama</a></p>
    </el-footer>
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

.el-main {
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 500px;
  padding: 35px;
}

.container {
  width: 95%;
}

.el-footer {
  background-color: #ffffff;
  color: #000;
  text-align: center;
  p {
    line-height: 60px;
  }
}
</style>
