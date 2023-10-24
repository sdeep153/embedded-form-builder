<!-- AutomationsDashboard.vue -->

<template>
  <NavigationBar/>
  <div>
    <h1 class="text-2xl font-bold">Automations Dashboard</h1>
    <p>This is the automations dashboard component.</p>
  </div>
</template>

<script>
import NavigationBar from '../navbar/NavigationBar.vue';
export default {
  name: "AutomationsDashboard",
  components:{
    NavigationBar
  }
};
</script>

<style scoped>
/* Add any scoped styles specific to the AutomationsDashboard component */
</style>
