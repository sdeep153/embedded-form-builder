import {createRouter, createWebHistory} from "vue-router"
import DashboardView from "@/components/dashboard/DashboardView.vue";
import CampaignsView from "@/components/campaigns/CampaignsView.vue";
import AutomationsView from "@/components/automations/AutomationsView.vue";
import AudienceView from "@/components/audience/AudienceView.vue";

const routes = [
  {
    path : '/',
    name : 'Dashboard',
    component : DashboardView
  },
  {
    path : '/campaigns',
    name : 'Campaigns',
    component : CampaignsView
  },
  {
    path : '/automations',
    name : 'Automations',
    component : AutomationsView
  },
  {
    path : '/audience',
    name : 'Audience',
    component : AudienceView
  },
];

const router = createRouter({
  history : createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
