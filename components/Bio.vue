<template>
  <el-row>
    <el-col class="profile">
      <card title="about">
        <p>
          As a developer and designer, I write code that follow the best practices and able to transform that into interactively beautiful and fully functional interfaces.
        </p>
      </card>
    </el-col>
  </el-row>
</template>

<script>
import card from "~/components/Card";

export default {
  components: {
    card
  }
};
</script>


<style lang="scss" scoped>
.profile {
  margin-bottom: 35px;
}
</style>

