<template>
  <div class="h-full bg-gray-200 flex items-center justify-center">
    <div class="">
      <h4 class="text-2xl font-semibold">Select form type</h4>
      <p class="mb-10 mt-2">What kind of form would you like to create?</p>

      <div class="flex">
        <div>
          <OptionsCard
            :name="name1"
            :text="text1"
            :imageSource="imageSource1"
            :isSelected="selectedCard === 1"
            @cardSelected="cardSelected(1)"
            class="m-2"
          />
        </div>
        <div>
          <OptionsCard
            :name="name2"
            :text="text2"
            :imageSource="imageSource2"
            :isSelected="selectedCard === 2"
            @cardSelected="cardSelected(2)"
            class="m-2"
          />
        </div>
        <div>
          <OptionsCard
            :name="name3"
            :text="text3"
            :imageSource="imageSource3"
            :isSelected="selectedCard === 3"
            @cardSelected="cardSelected(3)"
            class="m-2"
          />
        </div>
      </div>

      <hr class="my-4 w-full border-gray-300">

      <div class="flex justify-end" v-if="selectedCard">
        <button @click="continueClicked" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OptionsCard from './cards/OptionsCard.vue'

export default {
  components: {
    OptionsCard
  },
  props: {
    showBackButton: Boolean,
    showSubmitButton: Boolean,
    nextStep: Function,
    submitForm : Function,
    formData : Array,
    updateFormData: Function 
  },
  data() {
    return {
      name1: "Embedded Form",
      text1: "Create a form to embed on your website",
      imageSource1: "./images/img1.png",
      name2: "Landing Page",
      text2: "Create a landing page with a form",
      imageSource2: "./images/img2.png",
      name3: "Popup form",
      text3: "Add a form that pops up as a box",
      imageSource3: "./images/img3.png",
      selectedCard: null,
      localFormData: { ...this.formData },
    };
  },
  methods: {
    cardSelected(cardNumber) {
      this.selectedCard = cardNumber;
    },
    continueClicked() {
      if (this.selectedCard !== null) {
        // Call the nextStep method to navigate to the next step
        this.nextStep();
        this.localFormData.formType = this.selectedCard
        this.updateFormData(this.localFormData);
        // this.submitForm();
      }
    },
  }
};
</script>