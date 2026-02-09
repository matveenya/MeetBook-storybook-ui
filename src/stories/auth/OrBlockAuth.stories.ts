import type { Meta, StoryObj } from "@storybook/vue3-vite";
import OrBlockAuth from "../../components/auth/OrBlockAuth.vue";

const meta: Meta<typeof OrBlockAuth> = {
  title: "Auth/OrBlockAuth",
  component: OrBlockAuth,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: `
        <div style="max-width: 400px; padding: 40px; background-color: white;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof OrBlockAuth>;

export const Default: Story = {
  render: (args) => ({
    components: { OrBlockAuth },
    setup() {
      return { args };
    },
    template: '<OrBlockAuth v-bind="args" class="flex items-center w-full" />',
  }),
};