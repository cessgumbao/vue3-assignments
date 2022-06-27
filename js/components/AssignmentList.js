import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: {
    Assignment,
    AssignmentTags
  },
  template: `
    <section v-show="assignments.length" class="w-60">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>

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
    </section>
  `,
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: 'all'
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