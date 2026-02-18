import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Sidebar from "../../components/layout/Sidebar.vue";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    () => ({
      template: `
        <div style="height: 100vh; width: 280px; background-color: white; border-right: 1px solid #e5e7eb;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => ({
    components: { Sidebar },
    template: '<Sidebar />',
  }),
};