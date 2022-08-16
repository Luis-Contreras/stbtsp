import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "./index";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
      ],
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = ({ children, ...args }) => (
  <Title {...args}>{children}</Title>
);

export const Typography = Template.bind({});
Typography.args = {
  children: "primary",
  variant: "h3",
};
