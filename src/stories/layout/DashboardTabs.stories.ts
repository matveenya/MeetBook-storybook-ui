import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DashboardTabs from "../../components/layout/DashboardTabs.vue";

const meta: Meta<typeof DashboardTabs> = {
  title: "Layout/DashboardTabs",
  component: DashboardTabs,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    () => ({
      template: `
        <div style="background-color: #F8F9FB; padding: 24px; min-height: 200px;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof DashboardTabs>;

export const Default: Story = {
  render: () => ({
    components: { DashboardTabs },
    template: '<DashboardTabs />',
  }),
};