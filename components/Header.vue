<template>
  <el-header id="navbar">
    <div class="container">
      <nav role="navigation">
        <ul class="menu hidden-md-and-down">
          <li class="menu__item"><nuxt-link to="/" exact>About</nuxt-link></li>
          <li class="menu__item"><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li class="menu__item"><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li class="menu__item"><nuxt-link to="/projects">Projects</nuxt-link></li>
        </ul>

        <ul class="menu hidden-md-and-up">
          <li class="menu__item"><nuxt-link to="/" exact>Menu</nuxt-link></li>
        </ul>
      </nav>
      <div class="navbar-logo">
        <a href="/" class="logo navbar-btn">Raditya</a>
      </div>
      <div class="navbar-cta">
        <a class="navbar-btn">Contact</a>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  color: #000;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#navbar {
  transition: top 0.2s ease-in-out;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
}

.navbar-logo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    color: #000;
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    transition: all 0.2s ease-out;
    font-family: "proxima-nova", sans-serif;

    &:hover {
      color: #666;
    }
  }
}

nav {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu {
  margin: 0;
  padding: 0;

  &__item {
    margin: 0;
    padding: 0 15px;
    list-style: none;
    display: inline-block;
    font-family: "Lato", sans-serif;

    a {
      font-size: 18px;
      line-height: 60px;
      font-weight: 700;
      color: #999;
      transition: all 0.2s ease-out;
      display: block;
      &:hover {
        color: #000;
      }
    }

    &--active {
      transition: all 0.2s ease-out;
      color: #000 !important;

      a {
        line-height: 59px;
        color: #000;
      }

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #000;
      }
    }
  }
}

.navbar-cta {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  line-height: 60px;
  cursor: pointer;

  a {
    margin-right: 15px;
    border-radius: 3px;

    color: #000;
    font-weight: 700;

    &:after {
      display: inline-block;
      content: "";
      margin-top: 10px;
      margin-left: 10px;
      background-image: url("~/assets/icons/arrow.svg");
      background-size: cover;
      background-repeat: no-repeat;
      height: 17px;
      width: 20px;
    }
  }
}
</style>
