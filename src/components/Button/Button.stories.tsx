import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Button", variant: "primary", size: "md" },
};

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary", size: "md" },
};

export const Outline: Story = {
  args: { children: "Button", variant: "outline", size: "md" },
};

export const Danger: Story = {
  args: { children: "Delete", variant: "danger", size: "md" },
};

export const Loading: Story = {
  args: { children: "Submitting…", variant: "primary", loading: true },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
