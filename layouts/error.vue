<template>
  <div class="not-found">
    <h1 v-if="error.statusCode === 404">404</h1>
    <h2>Page not found</h2>
    <nuxt-link to="/">← Back</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  margin-top: 10%;

  h1 {
    font-size: 10em;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2em;
    margin: 0;
    margin-bottom: 20px;
  }

  a {
    font-size: 1.6em;
  }
}
</style>
