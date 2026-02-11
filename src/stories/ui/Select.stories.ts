import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Select from "../../components/ui/Select.vue";

interface Option {
  id: string;
  title: string;
}

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    optionLabel: { control: 'text' },
    placeholder: { control: 'text' },
    filter: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions: Option[] = [
  { id: '1', title: 'John Doe' },
  { id: '2', title: 'Jane Smith' },
  { id: '3', title: 'Robert Brown' },
  { id: '4', title: 'Alice Johnson' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    optionLabel: 'title',
    placeholder: 'Select members...',
    filter: true,
    modelValue: [],
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 300px;">
        <Select v-bind="args" v-model="args.modelValue" />
      </div>
    `,
  }),
};

export const Preselected: Story = {
  args: {
    ...Default.args,
    modelValue: [defaultOptions[0], defaultOptions[1]],
  },
};