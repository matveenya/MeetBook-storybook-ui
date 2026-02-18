import type { Meta, StoryObj } from "@storybook/vue3-vite";
import CalendarStats from "../../components/calendar/CalendarStats.vue";

const meta: Meta<typeof CalendarStats> = {
  title: "CALENDAR/CalendarStats",
  component: CalendarStats,
  tags: ["autodocs"],
  argTypes: {
    totalBookings: { 
      control: "number",
      description: "Total number of bookings" 
    },
  },
  args: {
    totalBookings: 0,
  },
  decorators: [
    () => ({
      template: `
        <div class="p-6 bg-white border border-gray-100 rounded-2xl inline-block">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof CalendarStats>;

export const Default: Story = {
  args: {
    totalBookings: 25,
  },
};