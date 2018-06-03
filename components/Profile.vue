<template>
  <el-row>
    <el-col class="profile">
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
                  <h1 class="profile__info-name">{{name}}</h1>
                  <p class="profile__info-desc">{{description}}</p>
                  <p class="profile__info-location">{{location}}</p>
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
    background-color: #ffffff;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  &__cover {
    min-height: 120px;
    background: #dde0e3;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    // background: url("/cover.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__info {
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-family: "Open Sans", Helvetica, sans-serif;
    h1 {
      font-size: 1.5em;
      line-height: 32px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.9);
      margin-bottom: 0;
    }
    &-location,
    &-desc {
      margin-top: 0;
      margin-bottom: 0;
      font-family: "Roboto", sans-serif;
      color: #9299a0;
      font-size: 14px;
    }
  }
  .avatar {
    margin-top: -80px;
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
