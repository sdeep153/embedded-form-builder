<template>
    <div class="flex flex-col items-center justify-center bg-gray-200 h-full">
        <h1 class="text-black font-semibold text-3xl">Target View</h1>
        <p class="m-4 text-black text-xl">Under Construction</p>
        <div class="flex justify-end">
            <button @click="goToPreviousStep" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white mr-4">
                Go Back
            </button>
            <button @click="storeData" class="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white ml-4">
                Continue
            </button>
        </div>
    </div>
</template>

<script scoped>
    export default{
        props : {
            goToPreviousStep : Function,
            nextStep : Function,
            submitForm : Function,
            formData : Array,
            updateFormData: Function 
        },
        data() {
            return {
                localFormData: { ...this.formData },
            };
        }, 
        methods : {
            storeData(){
                if(this.selectProduct !== null)
                this.localFormData.formType = this.selectedProduct
                this.updateFormData(this.localFormData);
                this.nextStep()
            }
        }
    }
</script>

<style scoped>

</style>