import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    Assignment,
    AssignmentTags
  },
  template: `
    <section v-show="show && assignments.length" class="w-70">
      <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>({{ assignments.length }})</span>
        </h2>
        <!-- <button v-show="canToggle" @click="show = false">&times;</button> -->
        <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
      </div>

      <assignment-tags 
        :initial-tags="assignments.map(a => a.tag)" 
        v-model:currentTag="currentTag"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
        <assignment
          v-for="assignment in filteredAssignments"
          :key="assignment.id"
          :assignment="assignment"
        > 
        </assignment>
      </ul>

      <slot />
    </section>
  `,
  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false }
  },

  data() {
    return {
      currentTag: 'all',
      show: true
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag == 'all' || !this.currentTag)
      {
        return this.assignments;
      }

      return this.assignments.filter(assignment => assignment.tag == this.currentTag);
    },
  }
}