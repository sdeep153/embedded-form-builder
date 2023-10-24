<template>
  <div
    class="inline-flex flex-col w-48 items-center text-center bg-white py-6 px-2 gap-2 shadow-lg rounded-lg cursor-pointer"
    :class="{'selected-card': isSelected}"
    @click="selectedCard"
  >
    <input
      type="radio"
      :name="radioName"
      :id="radioId"
      :checked="isSelected"
      class="ml-auto custom-radio"
    />
    <img :src="imageSource" alt="" class="w-20 h-20 mt-2 mb-2" />
    <h4><strong>{{ name }}</strong></h4>
    <p class="text-gray-500">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'text', 'imageSource', 'isSelected'],
  computed: {
    radioName() {
      // Generate a unique name for the radio button group
      return `radioGroup-${this._uid}`;
    },
    radioId() {
      // Generate a unique ID for the radio button
      return `radio-${this._uid}`;
    },
  },
  methods: {
    selectedCard() {
      this.$emit('cardSelected');
    }
  }
};
</script>

<style scoped>
  .selected-card {
    border: 2px solid #3376FF;
  }
  tyle>
  .custom-radio {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid blue;
    border-radius: 50%;
    background-color: white;
    position: relative;
  }

  .custom-radio input[type="radio"] {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
