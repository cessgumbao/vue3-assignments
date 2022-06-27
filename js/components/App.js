import AppButton from './AppButton.js';
import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {
  components: {
    // 'app-button': AppButton,
    Assignments,
    Panel,
  },
  template: `
    <div class="grid gap-6">
      <assignments></assignments>
      <panel>
        <template v-slot:heading>
          This is my heading.
        </template>

        This is my default content.
      </panel>

      <panel>
        This is my default content.
      </panel>

      <panel>
        <template v-slot:heading>
          This is my heading.
        </template>

        This is my default content.

        <template v-slot:footer>
          Click here to see more.
        </template>
      </panel>

      <panel theme="light">
        <template v-slot:heading>
          This is my heading.
        </template>

        This is my default content.

        <template v-slot:footer>
          Click here to see more.
        </template>
      </panel>
    </div>  
  `
};