import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "primary",
  color: "primary",
  onClick: () => console.log("primary"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "secondary",
  color: "secondary",
  onClick: () => console.log("secondary"),
};

export const Large = Template.bind({});
Large.args = {
  children: "inherit",
  color: "inherit",
  size: "large",
  onClick: () => console.log("inherit"),
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "primary",
};
