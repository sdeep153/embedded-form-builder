
<template>
  <NavigationBar/>
  <div>
    <h1 class="text-2xl font-bold">Campaigns Dashboard</h1>
    <p>This is the campaigns dashboard component.</p>
  </div>
</template>

<script>
import NavigationBar from '../navbar/NavigationBar.vue';

export default {
    name: "CampaignsDashboard",
    components: { NavigationBar }
};
</script>

<style scoped>
/* Add any scoped styles specific to the CampaignsDashboard component */
</style>
