<template>
  <div id="app">
    <div class="container">
      <Calendar />
      <DatePicker v-model="date" :mode="mode" is-inline />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      date: null,
      mode: "datetime",
    };
  },
};
</script>

<style>
.container {
  /* display: flex; */
}
</style>
