<template>
  <div class="hello">
    <h1 class="abc">{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.abc{
  margin-left:-12%;
  text-align:center;
  text-decoration: underline;
}
</style>