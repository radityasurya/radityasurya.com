<template>
  <el-row>
    <el-col class="work">
      <section>
        <h2 class="title">Work Experience</h2>
        <el-row :gutter="20">
          <el-col class="card" :lg="12" :md="12" :sm="12" v-for="experience in experiences" :key="experience.id">
            <div class="card__container">
              <div class="card__header">
                <img style="position: absolute; left: 20px; top: 20" width="36" height="36" src="~/assets/icons/work/pm.png" alt="">
                <h2 class="card__title">{{experience.title}}</h2>
                <h3 class="card__company">{{experience.company}}</h3>
                <span class="card__location">{{experience.location}}</span>
              </div>


              <span class="card__date">{{experience.year}}</span>

              <p class="card__description">{{experience.description}}</p>
            </div>
          </el-col>
        </el-row>
      </section>
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
          year: "Now",
          location: "Amsterdam, NL",
          description:
            "Manage to setup infrastructure by following best practices with DC/OS and Kubernetes and develop microservices program with Golang"
        },
        {
          id: 2,
          title: "Co-Founder",
          company: "Ruxup",
          year: "2017",
          location: "Eindhoven, NL",
          description:
            "Collaborate with a team to build an application to find travel companions and win the Viral Award from Fontys ICT Talent 2017"
        },
        {
          id: 3,
          title: "Front-End Engineer Intern",
          company: "Pocket Media",
          year: "2017",
          location: "Amsterdam, NL",
          description:
            "Improve the onboarding process for Pocket Media clients & continue the Native Ads Builder development"
        },
        {
          id: 4,
          title: "Front-End Engineer Intern",
          company: "PT. Kreatif Media Karya",
          year: "2016",
          location: "Jakarta, IDN",
          description:
            "Develop the front-end of the biggest Indonesia video sharing platform called Vidio.com and Improve the platform performance"
        },
        {
          id: 5,
          title: "Software Engineer Intern",
          company: "Vanderlande",
          year: "2016",
          location: "Veghel, NL",
          description:
            "Develop a Hybrid application that can run on multiple devices only with single source code for Vanderlande baggage tracking system"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: black;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: default;
}

.card {
  &__container {
    overflow: hidden;
    position: relative;
    padding: 20px;
    margin-bottom: 15px;
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.05);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  &__header {
    margin-left: 55px;
  }
  &__title {
    color: black;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 0;
  }
  &__company {
    font-weight: bold;
    font-size: 1em;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    // color: #5151e5;
    color: #777;
  }
  &__location {
    color: #9299a0;
    font-size: 0.9em;
    font-weight: bold;
  }
  &__date {
    position: absolute;
    top: 23px;
    right: 23px;
    color: #9299a0;
    font-size: 0.85em;
    font-style: italic;
  }
  p {
    margin-left: 55px;
    color: #9299a0;
  }
}
</style>
