<template>
  <div class="bg-gray-200">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 flex flex-col">
      <SearchBar class="mb-6 ml-auto" />
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a
          v-for="product in products"
          :key="product.id"
          @click="selectProduct(product.id)"
          class="group relative"
        >
          <!-- Container with white background and gray dots -->
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" :class="{ 'border-4 border-blue-500': selectedProduct === product.id }">
            <div class="relative">
              <div class="w-full h-10 absolute top-0 left-0 bg-white flex justify-start items-center">
                <div class="w-2 h-2 rounded-full bg-gray-300 m-1 ml-3"></div>
                <div class="w-2 h-2 rounded-full bg-gray-300 m-1"></div>
                <div class="w-2 h-2 rounded-full bg-gray-300 m-1"></div>
              </div>
            </div>
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
          </div>
          <h3 class="mt-4 text-sm text-gray-900 font-semibold">{{ product.name }}</h3>
        </a>
      </div>

      <div class="flex justify-end mt-8">
        <button @click="goToPreviousStep" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
          Go Back
        </button>
        <button @click="storeData" class="bg-white text-black px-4 py-2 ml-4 rounded-md hover:bg-blue-600 hover:text-white" v-if="selectedProduct !== null">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import SearchBar from './searchbar/SearchBar.vue'

export default {
  components: {
    SearchBar
  },
  props: {
    goToPreviousStep: Function,
    nextStep: Function,
    submitForm : Function,
    formData : Array,
    updateFormData: Function 
  },
  data() {
    return {
      localFormData: { ...this.formData },
      products: [
        {
          id: 1,
          name: 'Earthen Bottle',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
          id: 5,
          name: 'Earthen Bottle 2',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall 2 slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 6,
          name: 'Nomad Tumbler 2',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive 2 drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 7,
          name: 'Focus Paper Refill 2',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person 2 using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 8,
          name: 'Machined Mechanical Pencil 2',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand 2 holding black machined steel mechanical pencil with brass tip and top.',
        },
      ],
      selectedProduct: null // Initialize as null, indicating no selection
    }
  },
  methods: {
    selectProduct(productId) {
      this.selectedProduct = productId;
    },
    storeData(){
      if(this.selectProduct !== null)
      this.localFormData.formType = this.selectedProduct
      this.updateFormData(this.localFormData);
      this.nextStep()
    }
  }
}
</script>
