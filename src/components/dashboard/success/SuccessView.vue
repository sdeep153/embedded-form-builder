<template>
  <div class="w-screen h-full flex justify-center p-8 relative bg-gray-200">
    <div class="w-1/2">
      <h1 class="text-2xl font-semibold mb-4">What happens after displaying success screen</h1>
      <p class="text-gray-600 my-4">This is the screen user see after successfully submitting your form.</p>

      <!-- Radio button options -->
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <input type="radio" id="enters" name="triggerGroup1" value="enters" v-model="triggerType" class="w-5 h-5">
          <label for="enters">Do nothing</label>
        </div>

        <div class="flex items-center space-x-2">
          <input type="radio" id="scroll" name="triggerGroup2" value="scroll" v-model="triggerType" class="w-5 h-5">
          <label for="scroll">Close pop-up after </label>
          <input type="number" class="border px-2 py-1 rounded-md w-16 focus:outline-none" placeholder="3" />
          <label for="scroll"> seconds</label>
        </div>

        <div class="flex items-center space-x-2">
          <input type="radio" id="exits" name="triggerGroup3" value="redirect" v-model="triggerType" class="w-5 h-5">
          <label for="exits">Redirect to url</label>
        </div>

      </div>

      <!-- Horizontal Rule -->
      <hr class="my-4 border-gray-300">


          <!-- Go Back and Continue buttons -->
          <div class="flex justify-end mt-8">
                <button @click="goToPreviousStep" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
                  Go Back
                </button>
                <button @click="submitForm" class="bg-white text-black px-4 py-2 ml-4 rounded-md hover:bg-green-600 hover:text-white">
                  Submit
                </button>
          </div>

        </div>
      </div>
</template>

<script>
export default {
  props:{
    goToPreviousStep : Function,
    submitForm : Function
  },
  data() {
    return {
      triggerType: 'enters',
      showFrequency: 'everyPageView',
      stopShowing: 'never',
      showAdvanced: false, // Initially hidden
    };
  },
  computed: {
    radioOptions() {
      return [
        { value: 'enters', label: 'Enters the website' },
        { value: 'exits', label: 'Exits the website' },
        { value: 'scroll', label: 'On a page scroll in' },
        { value: 'afterSeconds', label: 'After a number of seconds on the website' },
      ];
    },
    showFrequencyOptions() {
      return [
        { value: 'everyPageView', label: 'Every page view' },
        { value: 'everyNewSession', label: 'Every new browser session' },
        { value: 'afterDays', label: 'After X days' },
      ];
    },
    stopShowingOptions() {
      return [
        { value: 'never', label: 'Never' },
        { value: 'ifCompletedAction', label: 'If the visitor has successfully completed the action' },
        { value: 'ifShownXTimes', label: 'If the visitor has successfully completed the action or the pop-up has been shown X times' },
      ];
    },
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced;
    },
  },
};
</script>

<style scoped>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
  }
</style>
