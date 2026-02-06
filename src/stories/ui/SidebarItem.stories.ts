import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SidebarItem from "../../components/ui/SidebarItem.vue";

const meta: Meta<typeof SidebarItem> = {
  title: "UI/SidebarItem",
  component: SidebarItem,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text" },
  },
  args: {
    icon: "pi pi-home",
  },
  decorators: [
    () => ({
      template:
        '<div style="max-width: 280px;" class="p-4 bg-white"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  render: (args) => ({
    components: { SidebarItem },
    setup() {
      return { args };
    },
    template: '<SidebarItem v-bind="args">Dashboard</SidebarItem>',
  }),
};

export const Hover: Story = {
  render: (args) => ({
    components: { SidebarItem },
    setup() {
      return { args };
    },
    template: `
        <SidebarItem v-bind="args" class="bg-[#EEF2FF] text-[#3E5CE9]">
          Hover Item
        </SidebarItem>
      `,
  }),
};

export const Focus: Story = {
  render: (args) => ({
    components: { SidebarItem },
    setup() {
      return { args };
    },
    template: `
        <SidebarItem v-bind="args" class="bg-[#EEF2FF] text-[#3E5CE9]">
          Focused Item
        </SidebarItem>
      `,
  }),
};
