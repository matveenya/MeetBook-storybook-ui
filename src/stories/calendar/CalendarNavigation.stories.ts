import type { Meta, StoryObj } from "@storybook/vue3-vite";
import CalendarNavigation from "../../components/calendar/CalendarNavigation.vue";

const meta: Meta<typeof CalendarNavigation> = {
  title: "CALENDAR/CalendarNavigation",
  component: CalendarNavigation,
  tags: ["autodocs"],
  argTypes: {
    title: { 
      control: "text",
      description: "Header text (e.g. current month or date)" 
    },
    onPrev: { action: "prev" },
    onNext: { action: "next" },
    onToday: { action: "today" },
  },
  args: {
    title: "February 2026",
  },
  decorators: [
    () => ({
      template: `
        <div class="p-6 bg-white border border-gray-100 rounded-2xl inline-block shadow-sm">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof CalendarNavigation>;

export const Default: Story = {
  args: {
    title: "February 2026",
  },
};