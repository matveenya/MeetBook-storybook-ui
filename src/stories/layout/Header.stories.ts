import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Header from "../../components/layout/Header.vue";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen", 
  },
  decorators: [
    () => ({
      template: `
        <div style="background-color: #F8F9FB;">
          <story />
        </div>
      `,
    }),
  ],
  argTypes: {
    userName: { control: "text" },
    onLogout: { action: "logout" },
  },
  args: {
    userName: "Ivan Ivanov",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    userName: "Ivan Ivanov",
  },
};