<template>
  <h1 v-bind="attrs">
    {{ message }}
  </h1>
  <TextField
    v-model="message"
    :count="count" />
  <TheButton
    name="primary"
    @click="count += 1"> 
    increase
  </TheButton> 
  <TheButton
    name="danger"
    size="lg">
    <template #default>
      New => default
    </template>
    <template #label="{ size, btnName }">
      label => label / {{ size }} / {{ btnName }}
    </template>
  </TheButton>
  <Thebutton />
  <div></div>
</template> 

<script>
import TextField from '~/components/HelloWord'
import TheButton from '~/components/TheButton'


export default {
  components: {
    TextField,
    TheButton
  },
  data() {
    return {
      message: 'Hello Vue SFC!',
      count: 7,
      attrs: {
        class: 'yoo kdt',
        style: 'color: red;',
        onclick: () => console.log('onClick!')
      }
    }
  },
  mounted() {
   
  }
}
</script>
