import React, { FC } from "react";
import { FormProps } from "./type";

const Form: FC<FormProps> = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

export default Form;
