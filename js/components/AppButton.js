export default {
  template: `
    <button 
      :class="{
        'bg-gray-200 hover:bg-gray-400 border rounded px-4 py-2 disabled:cursor-not-allowed' : true,
        'bg-blue-600 hover:bg-blue-700 border rounded px-4 py-2' : type == 'primary',
        'bg-purple-200 hover:bg-purple-400 border rounded px-4 py-2' : type == 'secondary',
        'bg-gray-200 hover:bg-gray-400 border rounded px-4 py-2' : type == 'muted',
        'is-loading' : processing
      }" 
      :disabled="processing" 
      @click="process">
      <slot />
    </button> 
  `,
  // method: {
  //   process() {
  //     this.processing = true;
  //   },
  // },
  props: {
    type : {
      type: String,
      default: 'primary',
    },
    processing: {
      type: Boolean,
      default: false,
    }
  },
}