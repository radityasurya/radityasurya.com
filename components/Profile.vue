<template>
  <el-row :gutter="20">
    <el-col id="profile" class="profile" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="profile__container">
        <el-row>
          <el-col :span="24">
            <div class="profile__cover"></div>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="10">
              <el-col :span="24">
                <div class="avatar">
                  <img src="~/assets/avatar.jpg" alt="Raditya Surya Pratama" class="avatar__img img-circle">
                </div>
              </el-col>
              <el-col :span="24">
                <div class="profile__info">
                  <h1>{{name}}</h1>
                  <h3>{{description}}</h3>
                  <h5>{{location}}</h5>
                </div>
              </el-col>
            </el-row>
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
      name: "Raditya Surya Pratama",
      description: "Programmer and Web Designer",
      location: "Eindhoven, The Netherlands"
    };
  }
};
</script>

<style lang="scss" scoped>
.profile {
  &__container {
    box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.05);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    overflow: hidden;
    // border: 1px solid #ffffff;
    background-color: #ffffff;
    &:hover {
      // box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.05);
      // border: 1px solid #409eff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  &__cover {
    min-height: 180px;
    background: #dde0e3;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    // background: url("/cover.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__info {
    padding-bottom: 20px;
    text-align: center;
    h1 {
      font-size: 24px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.9);
    }
    h3 {
      line-height: 24px;
      color: rgba(0, 0, 0, 0.65);
    }
    h5 {
      line-height: 24px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .avatar {
    margin-top: -94px;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__img {
      max-height: 130px !important;
      height: 130px !important;
      width: 130px !important;
      border: 4px solid #fff;
      transition: all 1s;
      cursor: pointer;
      &:hover {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
  .img-circle {
    border-radius: 50%;
  }
}
</style>
