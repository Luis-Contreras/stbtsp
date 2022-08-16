import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <Input {...args} />
);

export const primary = Template.bind({});
primary.args = {
  label: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
  label: "secondary",
};
