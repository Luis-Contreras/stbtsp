import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./index";
import Input from "../../components/input";
import Button from "../../components/button";

export default {
  title: "Modules/Forms",
  component: Form,
  argTypes: {},
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ children, ...args }) => (
  <Form {...args}>{children}</Form>
);

const form = () => {
  return (
    <>
      <Input label="Formulario" />
      <Button color="primary" onClick={() => console.log("prueba")}>
        Enviar
      </Button>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: form(),
};
