<template>
  <div class="flex flex-col h-screen">
    <NavigationBar />
    <nav class="bg-white p-4 pl-16 pr-16">
      <div class="flex justify-between items-center">
        <div class="text-gray-800 font-bold text-xl/4">
          {{ currentStepName }}
        </div>
        <div class="space-x-4 flex items-center text-gray-500 font-semibold">
          <template v-for="(step, index) in steps" :key="'step-' + index">
            <a :class="[stepClass(index), setCompletedClass(index)]" @click="goToStep(index)">
              {{ step.name }}
            </a>
            <!-- Only display the ChevronRight component for steps other than 'Success' -->
            <ChevronRight v-if="index < steps.length - 1" :key="'chevron-' + index" />
          </template>
        </div>
      </div>
    </nav>

    <div class="flex-1">
      <component 
        :is="currentStepComponent"
        :goToPreviousStep="goToPreviousStep"
        :nextStep="nextStep"
        :submitForm="submitForm" 
        :formData="formData"
        :class="[setContentClass(currentStep)]"
      />
    </div>
  </div>
</template>

<script>
import NavigationBar from '../navbar/NavigationBar.vue';
import ChevronRight from './icons/ChevronRight.vue';

import TypeView from './type/TypeView.vue';
import DesignView from './design/DesignView.vue';
import ContentView from './content/ContentView.vue';
import TargetView from './target/TargetView.vue';
import BehaviourView from './behaviour/BehaviourView.vue';
import SuccessView from './success/SuccessView.vue';

export default {
  data() {
    return {
      steps: [
        { name: 'Type', id: 1, component: TypeView },
        { name: 'Design', id: 2, component: DesignView },
        { name: 'Content', id: 3, component: ContentView },
        { name: 'Target', id: 4, component: TargetView },
        { name: 'Behaviour', id: 5, component: BehaviourView },
        { name: 'Success', id: 6, component: SuccessView },
      ],
      currentStep: 0,
      formData: [
        { formType: {} },
        { designType: {} },
        { contentType: {} },
        { behaviorType: {} },
        { successType: {} },
      ],
    };
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep].component;
    },
    currentStepName() {
      return this.steps[this.currentStep].name;
    },
  },
  methods: {
    stepClass(index) {
      return {
        'text-black': index === this.currentStep,
      };
    },
    setCompletedClass(index) {
      return {
        'text-blue-600': index < this.currentStep,
      };
    },
    setContentClass(index) {
      return {
        'full-screen-content': index === 2,
      };
    },
    goToStep(index) {
      if (index <= this.currentStep) {
        this.currentStep = index;
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.setCompletedClass(this.currentStep);
        this.currentStep++;
      }
    },
    submitForm() {
      alert('Form submitted successfully');
    }
  },
  components: {
    NavigationBar,  
    ChevronRight,
    TypeView,
    DesignView,
    ContentView,
    TargetView,
    BehaviourView,
    SuccessView,
  },
};
</script>

<style scoped>
  .full-screen-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white; 
  }
</style>
