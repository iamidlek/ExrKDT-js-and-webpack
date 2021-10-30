<template>
  <button
    :class="{
      [name]: true,
      [size]: true
    }">
    <slot>들어오지 않으면 디폴트로 나올 내용</slot>
  </button>
  <slot
    name="label"
    :btnName="name"
    :size="size"></slot>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: gray;
  border: none;
  &.sm {
    font-size: 13px;
  }
  &.lg {
    font-size: 19px;
    padding: 6px 12px;
  }
  &.primary {
    background-color: royalblue;
  }
  &.danger {
    background-color: purple;
  }
}
</style>
