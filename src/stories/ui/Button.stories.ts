import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "../../components/ui/Button.vue";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outlined", "icon", "danger", "tab"],
    },
    fluid: { control: "boolean" },
  },
  args: {
    label: "Button",
    variant: "primary",
    fluid: true,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete Item",
    variant: "danger",
  },
};

export const Tab: Story = {
  args: {
    label: "Tab Menu Item",
    variant: "tab",
    fluid: false,
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <i class="pi pi-bell"></i>
      </Button>
    `,
  }),
};
