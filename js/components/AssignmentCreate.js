
export default {
  template: `
    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New assignment.." class="p-2"/>
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
  `,

  // Props option
  // props: {
  //   assignments: Array,
  // },

  data() {
    return {
      newAssignment : "",
    }
  },
  
  methods: {
    add() {

      // The parent communicate to the child, through props
      // The child communicate to the parent, through emitting ($emit function)

      // Using $emit function to allow parent have the control
      this.$emit('add', this.newAssignment);

      // For props option
      // this.assignments.push({
      //   name: this.newAssignment,
      //   complete: false,
      //   id: this.assignments.length + 1
      // });

      this.newAssignment = "";
    },
  }
};