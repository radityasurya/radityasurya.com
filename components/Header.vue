<template>
  <el-header id="navbar">
    <div class="container">
      <nav role="navigation">
        <ul class="menu hidden-md-and-down">
          <li class="menu__item">
            <nuxt-link to="/" exact>About</nuxt-link>
          </li>
          <li class="menu__item">
            <nuxt-link to="/blogs">Blog</nuxt-link>
          </li>
          <li class="menu__item">
            <nuxt-link to="/skills">Skills</nuxt-link>
          </li>
          <li class="menu__item">
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
        </ul>

        <ul class="menu hidden-md-and-up">
          <li class="menu__item dropdown" @click="toggle" ref="dropdownMenu">
            <a class="menu__link menu__link--toggle">
              <img src="menu.svg" alt="" width="16" height="16">
            </a>
            <transition name="slide-y">
              <div v-if="opened" class="dropdown-content">
                <router-link active-class="dropdown-active" to="/" exact>About</router-link>
                <router-link active-class="dropdown-active" to="/blog">Blog</router-link>
                <router-link active-class="dropdown-active" to="/skills">Skills</router-link>
                <router-link active-class="dropdown-active" to="/project">Projects</router-link>
              </div>
            </transition>
          </li>
        </ul>
      </nav>

      <div class="navbar-logo">
        <a href="/" class="logo navbar-btn">Raditya</a>
      </div>

      <div class="navbar-cta">
        <ul class="menu">
          <li class="menu__item hidden-md-and-down">
            <a class="navbar-btn" href="mailto:radiyasurya@hotmail.com">Contact</a>
          </li>
          <li class="menu__item hidden-md-and-up">
            <a class="menu__link" href="mailto:radiyasurya@hotmail.com">
              <img class="hidden-md-and-up" src="chat.svg" width="19" height="19">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  data: function() {
    return {
      opened: false
    };
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.dropdownMenu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.hide();
      }
    },
    toggle() {
      this.opened = !this.opened;
    },

    hide() {
      this.opened = false;
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  color: #000;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  z-index: 999;
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
    width: 90%;
  }
}

.navbar-logo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    color: #000;
    // font-size: 28px;
    font-size: 2em;
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
  display: flex;
  justify-content: center;
  align-content: center;
  &__item {
    margin: 0;
    padding: 0 15px;
    list-style: none;
    display: inline-block;
    font-family: "Lato", sans-serif;
    a {
      // font-size: 18px;
      font-size: 1.3em;
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
  &__link {
    display: flex;
    justify-content: center;
    align-content: center;

    &--toggle {
      cursor: pointer;
      img {
        vertical-align: middle;
        margin-bottom: 2px;
      }
    }
  }
}

.dropdown-content {
  display: block;
  position: absolute;
  margin-top: 1px;
  background-color: #ffffff;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */

.dropdown-content a {
  color: #999;
  padding: 3px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */

.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: black;
}

.navbar-cta {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Lato", sans-serif;
  line-height: 60px;
  cursor: pointer;
  .menu__item {
    display: flex;
  }
  .navbar-btn {
    &:after {
      display: inline-block;
      content: "";
      margin-top: 20px;
      margin-left: 10px;
      background-image: url("~/assets/icons/arrow.svg");
      background-size: cover;
      background-repeat: no-repeat;
      height: 17px;
      width: 20px;
    }
  }
  a {
    color: #000;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      vertical-align: middle;
    }
  }
}
</style>
