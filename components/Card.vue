<template>
  <div class="card">
    <h2 class="card__title">{{title}}</h2>
    <div class="card__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
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
