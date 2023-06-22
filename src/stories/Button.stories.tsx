import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: "default",
  args: {
    title: "Button",
  },
};

export const Secondary: Story = {
  name: "console.warn",
  args: {
    title: "Button",
  },
};
