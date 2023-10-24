<template>
  <div class="w-full h-full flex justify-center p-8 relative bg-gray-200">
    <div class="w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Show the pop-up when the visitor:</h1>

      <!-- Trigger options -->
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <input type="radio" id="triggerEnters" name="triggerType" value="enters" v-model="triggerType" class="w-5 h-5" checked>
          <label for="triggerEnters">Enters website</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="triggerExits" name="triggerType" value="exits" v-model="triggerType" class="w-5 h-5">
          <label for="triggerExits">Exits website</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="triggerScroll" name="triggerType" value="scroll" v-model="triggerType" class="w-5 h-5">
          <label for="triggerScroll">On</label>
          <input type="number" class="border px-2 py-1 rounded-md w-20 focus:outline-none" placeholder="50%">
          <label for="triggerScroll">page scroll</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="triggerAfterSeconds" name="triggerType" value="afterSeconds" v-model="triggerType" class="w-5 h-5">
          <label for="triggerAfterSeconds">After</label>
          <input type="number" v-model="seconds" class="border px-2 py-1 rounded-md w-16 focus:outline-none" placeholder="5">
          <label for="triggerAfterSeconds">seconds on website</label>
        </div>
      </div>

      <!-- Horizontal Rule -->
      <hr class="my-4 border-gray-300">

      <!-- Advanced button to toggle the display of advanced options -->
      <button @click="toggleAdvanced">{{ showAdvanced ? 'Hide Advanced' : 'Show Advanced' }}</button>

      <!-- Advanced Options (hidden by default, shown when "Advanced" button is clicked) -->
      <div class="flex flex-col">
        <!-- First Advanced Option -->
        <div class="space-y-2 p-4 mb-4" v-if="showAdvanced">
          <h1 class="text-2xl font-semibold mb-4">How often to show the pop-up</h1>
          <div>
            <p class="text-gray-600 my-4">Set the period when you want to show the popup to the same visitor if they didn't subscribe.</p>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" id="showEveryPage" name="showFrequency" value="enters" v-model="showFrequency" class="w-5 h-5" checked>
            <label for="showEveryPage">Every page view</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" id="showEverySession" name="showFrequency" value="exits" v-model="showFrequency" class="w-5 h-5">
            <label for="showEverySession">Every new browser session</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" id="showAfterDays" name="showFrequency" value="afterDays" v-model="showFrequency" class="w-5 h-5">
            <label for="showAfterDays">After</label>
            <input type="number" v-model="days" class="border px-2 py-1 rounded-md w-16 focus:outline-none" placeholder="3">
            <label for="showAfterDays">Days</label>
          </div>
        </div>

        <hr class="my-4 border-gray-300" v-if="showAdvanced">

        <!-- Second Advanced Option -->
        <div class="flex flex-col">
          <div class="space-y-2 p-4" v-if="showAdvanced">
            <h1 class="text-2xl font-semibold mb-4">When to stop showing the pop-up</h1>
            <div class="flex items-center space-x-2">
              <input type="radio" id="stopNever" name="stopShowing" value="never" v-model="stopShowing" class="w-5 h-5" checked>
              <label for="stopNever">Never</label>
            </div>
            <div class="flex items-center space-x-2">
              <input type="radio" id="stopIfCompletedAction" name="stopShowing" value="ifCompletedAction" v-model="stopShowing" class="w-5 h-5">
              <label for="stopIfCompletedAction">If the visitor has automatically completed the action</label>
            </div>
            <div class="flex items-center space-x-2">
              <input type="radio" id="stopIfShownXTimes" name="stopShowing" value="ifShownXTimes" v-model="stopShowing" class="w-5 h-5">
              <label for="stopIfShownXTimes">Previous or pop-up has been shown</label>
              <input type="number" v-model="times" class="border px-2 py-1 rounded-md w-16 focus:outline-none" placeholder="3">
              <label for="stopIfShownXTimes">times</label>
            </div>
          </div>

          <!-- Horizontal rule -->
          <hr class="mt-4 border-gray-300">

          <!-- Go Back and Continue buttons -->
          <div class="flex justify-end mt-8">
            <button @click="goToPreviousStep" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">Go Back</button>
            <button @click="nextStep" class="bg-white text-black px-4 py-2 ml-4 rounded-md hover:bg-blue-600 hover:text-white">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goToPreviousStep: Function,
    nextStep: Function
  },
  data() {
    return {
      triggerType: 'enters',
      showFrequency: 'showEveryPage',
      stopShowing: 'stopNever',
      showAdvanced: false,
      seconds: 5,
      days: 3,
      times: 3
    };
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
