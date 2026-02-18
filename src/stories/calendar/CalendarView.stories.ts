import type { Meta, StoryObj } from "@storybook/vue3-vite";
import CalendarView from "../../components/calendar/CalendarView.vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

const meta: Meta<typeof CalendarView> = {
  title: "CALENDAR/CalendarView",
  component: CalendarView,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    options: {
      control: "object",
      description: "FullCalendar Options Configuration",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarView>;

export const Default: Story = {
  args: {
    options: {
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        resourceTimeGridPlugin,
      ],
      initialView: "resourceTimeGridDay",
      resources: [
        { id: "a", title: "Room A" },
        { id: "b", title: "Room B" },
        { id: "c", title: "Room C" },
      ],
      events: [
        {
          id: "1",
          resourceId: "a",
          title: "Meeting",
          start: new Date().setHours(10, 0),
          end: new Date().setHours(12, 0),
          backgroundColor: "#3E5CE9",
        },
        {
          id: "2",
          resourceId: "b",
          title: "Conference",
          start: new Date().setHours(13, 0),
          end: new Date().setHours(15, 0),
          backgroundColor: "#10B981",
        },
      ],
      headerToolbar: false,
      height: "auto",
      nowIndicator: true,
      editable: true,
      selectable: true,
      slotMinTime: "08:00:00",
      slotMaxTime: "20:00:00",
      allDaySlot: false,
    },
  },
};