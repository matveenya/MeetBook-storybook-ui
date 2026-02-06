import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Input from '../../components/ui/Input.vue';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
    },
  },
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    icon: '',
    toggleMask: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const FullName: Story = {
  args: {
    placeholder: 'Full Name',
    icon: 'pi pi-user',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
    icon: 'pi pi-envelope',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
    icon: 'pi pi-lock',
    toggleMask: true,
    feedback: false,
  },
};

export const ConfirmPassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Confirm password',
    icon: 'pi pi-lock',
    toggleMask: true,
  },
};

export const InvalidEmail: Story = {
    args: {
      type: 'email',
      placeholder: 'Email',
      icon: 'pi pi-envelope',
      error: 'Email incorrect',
      modelValue: '',
    },
  };
  
  export const PasswordError: Story = {
    args: {
      type: 'password',
      placeholder: 'Password',
      icon: 'pi pi-lock',
      error: 'Password must be at least 6 characters',
      toggleMask: true,
    },
}