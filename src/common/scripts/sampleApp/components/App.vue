<template>
  <div>
    <p>{{ sampleText }}</p>
    <input type="text" v-model="sampleText">
  </div>
</template>

<script>
export default {
  name:'App',
  data:function(){
    return {
      sampleText: "hello"
    }
  }
}
</script>

<style>

</style>