<template>
  <el-row :gutter="35">
    <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
      <profile></profile>
      <bio></bio>
    </el-col>
    <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12">
      <expertise-list></expertise-list>
      <work-list></work-list>
    </el-col>
  </el-row>
</template>

<script>
import profile from "~/components/Profile";
import bio from "~/components/Bio";
import card from "~/components/Card";
import expertiseList from "~/components/ExpertiseList";
import workList from "~/components/WorkList";

export default {
  data: function() {
    return {
      educations: [
        {
          id: 1,
          univ: "Fontys University",
          study: "Bachelor's of ICT & Software",
          year: "2013 until 2017"
        }
      ],
      awards: [
        {
          id: 1,
          title: "Viral Awards - Ruxup",
          program: "Fontys ICT Talent",
          year: 2017
        }
      ],
      languages: [
        {
          id: 1,
          name: "English",
          level: "IELTS Score 6"
        },
        {
          id: 2,
          name: "Bahasa Indonesia",
          level: "Native"
        },
        {
          id: 3,
          name: "Dutch",
          level: "Basic"
        }
      ]
    };
  },
  components: {
    profile,
    bio,
    card,
    expertiseList,
    workList
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__title {
    color: black;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    cursor: default;
  }
  &__container {
    overflow: hidden;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.05);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    p {
      color: #9299a0;
    }
  }
}
</style>
