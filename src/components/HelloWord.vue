<template>
  <input
    type="text"
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" />
  <div>{{ count }}</div>
</template>

<script>
export default {
  props: {
    modelValue: { 
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0,
      required: true
    }
  },
  // props: ['message'],
  // props의 경우 v-model 안됨 진짜 주인은 부모니까
  // 즉 읽기 가능 쓰기 불가능
  emits: ['update:modelValue']
}
</script>
