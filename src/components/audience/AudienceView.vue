<template>
  <div id="audience_main">
    <NavigationBar />
    <div class="">
      <h1 class="text-2xl font-bold">Audience Dashboard</h1>
      <p>This is the audience dashboard component.</p>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../navbar/NavigationBar.vue';

export default {
  name: "AudienceDashboard",
  components: { NavigationBar },
};
</script>

<style scoped>
</style>
