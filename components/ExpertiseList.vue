<template>
  <el-row>
    <el-col>
      <card title="expertises">
            <ul class="expertises">
              <li class="expertises__item" v-for="expertise in expertises" :key="expertise.id">
                <img class="expertises__item-icon" :src="`expertises/${expertise.icon}`">
                <span class="expertises__item-title">{{expertise.title}}</span>
              </li>
            </ul>
          </card>
    </el-col>
  </el-row>
</template>

<script>
import card from "~/components/Card";

export default {
  components: {
    card
  },
  data: function() {
    return {
      expertises: [
        {
          id: 1,
          title: "Software Engineering",
          icon: "software-engineering.png"
        },
        {
          id: 2,
          title: "User Interface Design",
          icon: "user-interface-design.png"
        },
        {
          id: 3,
          title: "Infrastructure and Architecture Design",
          icon: "infrastructure-design.png"
        },
        {
          id: 4,
          title: "Development and Operations (DevOps)",
          icon: "devops.png"
        },
        {
          id: 5,
          title: "User Experience Design",
          icon: "user-experience-design.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.expertises {
  margin: 0;
  padding: 0;

  &__item {
    background: #f5f6f8;
    padding: 15px;
    list-style: none;
    cursor: pointer;
    border-radius: 3px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    &-icon {
      vertical-align: middle;
      width: 23px;
      height: 23px;
      margin-right: 15px;
    }

    &-title {
      font-family: "proxima-nova", sans-serif;
      font-size: 14px;
      font-size: 1.1em;
      font-weight: 600;
    }

    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }
}
</style>

