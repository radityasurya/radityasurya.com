<template>
  <el-row>
    <el-col class="work">
      <div class="card">
        <h2 class="card__title">Work Experience</h2>
        <el-row :gutter="20">
          <el-col :lg="12" :sm="24" v-for="experience in experiences" :key="experience.id">
            <div class="card__container">
              <h2>{{experience.title}}</h2>
              <h3>{{experience.company}}</h3>
              <span>{{experience.year}} - {{experience.location}}</span>

              <p>{{experience.description}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: function() {
    return {
      experiences: [
        {
          id: 1,
          title: "Software Engineer",
          company: "Pocket Media",
          year: "2018",
          location: "Amsterdam, The Netherlands",
          description:
            "Manage to setup infrastructure by following best practices with DC/OS and Kubernetes and develop microservices program with Golang."
        },
        {
          id: 2,
          title: "Co-Founder",
          company: "Ruxup",
          year: "2017",
          location: "Eindhoven, The Netherlands",
          description:
            "Collaborate with a team to build an application to find travel companions and win the Viral Award from Fontys ICT Talent 2017"
        },
        {
          id: 3,
          title: "Front-End Engineer Intern",
          company: "Pocket Media",
          year: "2017",
          location: "Amsterdam, The Netherlands",
          description:
            "Collaborate with a team to build an application to find travel companions and win the Viral Award from Fontys ICT Talent 2017"
        },
        {
          id: 4,
          title: "Front-End Engineer Intern",
          company: "PT. Kreatif Media Karya",
          year: "2016",
          location: "Jakarta, Indonesia",
          description:
            "Develop the front-end of the biggest Indonesia video sharing platform called Vidio.com and Improve the platform performance"
        },
        {
          id: 5,
          title: "Software Engineer Intern",
          company: "Vanderlande",
          year: "2016",
          location: "Veghel, The Netherlands",
          description:
            "Develop a Hybrid application that can run on multiple devices only with single source code for Vanderlande baggage tracking system"
        }
      ]
    };
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
