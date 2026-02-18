import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ModalMeeting from "../../components/calendar/ModalMeeting.vue";

const meta: Meta<typeof ModalMeeting> = {
  title: "CALENDAR/ModalMeeting",
  component: ModalMeeting,
  tags: ["autodocs"],
  argTypes: {
    visible: { control: "boolean" },
    isEdit: { control: "boolean" },
    allUsers: { control: "object" },
    "onUpdate:visible": { action: "update:visible" },
    onConfirm: { action: "confirm" },
    onDelete: { action: "delete" },
  },
  args: {
    visible: true,
    isEdit: false,
    allUsers: [
      { id: "1", title: "Ivan Ivanov" },
      { id: "2", title: "Petr Petrov" },
      { id: "3", title: "Sidor Sidorov" },
    ],
    form: {
      title: "",
      invitedUsers: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalMeeting>;

export const Create: Story = {
  render: (args) => ({
    components: { ModalMeeting },
    setup() {
      return { args };
    },
    template: `
      <ModalMeeting 
        v-bind="args" 
        v-model:visible="args.visible"
        v-model:form="args.form"
      />
    `,
  }),
};

export const Edit: Story = {
  args: {
    isEdit: true,
    form: {
      title: "Weekly Sync",
      invitedUsers: [{ id: "1", title: "Ivan Ivanov" }],
    },
  },
  render: (args) => ({
    components: { ModalMeeting },
    setup() {
      return { args };
    },
    template: `
      <ModalMeeting 
        v-bind="args" 
        v-model:visible="args.visible"
        v-model:form="args.form"
      />
    `,
  }),
};