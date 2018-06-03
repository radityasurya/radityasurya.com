<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="10" :md="8" :lg="8" :xl="6">
      <profile></profile>
      <bio></bio>
    </el-col>
    <el-col :xs="24" :sm="14" :md="16" :lg="16" :xl="12">
      <el-row>
        <el-col class="expertises">
          <card title="expertises">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam metus, a commodo justo. Curabitur nec nulla porttitor, malesuada ex sit amet, vehicula est. Proin porttitor ut nulla ullamcorper blandit.
            </p>
          </card>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="work">
          <card title="work experiences">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam metus, a commodo justo. Curabitur nec nulla porttitor, malesuada ex sit amet, vehicula est. Proin porttitor ut nulla ullamcorper blandit.
            </p>
          </card>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="education">
          <card title="education">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam metus, a commodo justo. Curabitur nec nulla porttitor, malesuada ex sit amet, vehicula est. Proin porttitor ut nulla ullamcorper blandit.
            </p>
          </card>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="awards">
          <card title="awards">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam metus, a commodo justo. Curabitur nec nulla porttitor, malesuada ex sit amet, vehicula est. Proin porttitor ut nulla ullamcorper blandit.
            </p>
          </card>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="languages">
          <card title="languages">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam metus, a commodo justo. Curabitur nec nulla porttitor, malesuada ex sit amet, vehicula est. Proin porttitor ut nulla ullamcorper blandit.
            </p>
          </card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import profile from "~/components/Profile";
import bio from "~/components/Bio";
import card from "~/components/Card";

export default {
  components: {
    profile,
    bio,
    card
  }
};
</script>

<style>
</style>
