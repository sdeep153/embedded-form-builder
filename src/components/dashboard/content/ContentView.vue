<template>
  <div id="main">
    <div class="flex justify-between items-center m-4 mb-8" id="navigation">
      <div id="left">
        <button @click="saveDesign" class="text-black px-4 py-2 mr-2 rounded-md bg-green-600 text-white">Save Design</button>
        <button @click="exportHtml" class="text-black px-4 py-2 ml-2 rounded-md bg-green-600 text-white">Export HTML</button>
      </div>
      <div id="heading" class="text-gray-500 text-xl font-semibold">Content</div>
      <div id="right">
        <button @click="goToPreviousStep" class="bg-white text-black px-4 py-2 mr-2 rounded-md hover:bg-blue-600 hover:text-white">
          Go Back
        </button>
        <button @click="storeData" class="bg-white text-black px-4 py-2 ml-2 rounded-md hover:bg-blue-600 hover:text-white">
          Continue
        </button>
      </div>
    </div>

    <div id="email-editor-container" class="w-full h-full">
      <EmailEditor
        ref="emailEditor"
        :min-height="minHeight"
        @load="editorLoaded"
        @ready="editorReady"
      />
    </div>

  </div>
</template>

<script>
import { EmailEditor } from 'vue-email-editor';

export default {
  name: 'MailMain',
  components: {
    EmailEditor,
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
      minHeight: '100%',
    };
  },
  methods: {
    editorLoaded() {
      console.log('editorLoaded');
      // You can load a design here if needed.
      // this.$refs.emailEditor.editor.loadDesign({});
    },
    editorReady() {
      console.log('editorReady');
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        alert('Design saved: ' + JSON.stringify(design));
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        alert('Exported HTML: ' + data);
      });
    },
    storeData(){
      if(this.selectProduct !== null)
      this.localFormData.formType = this.selectedProduct
      this.updateFormData(this.localFormData);
      this.nextStep()
    }
  },
};
</script>

<style scoped>
/* Apply full height and width to the main container */
#main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Ensure the email editor container takes full available space */
#email-editor-container {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
}
</style>
