import React, { FC } from "react";
import { InputProps } from "./types";
import { TextField } from "@material-ui/core";

const Input: FC<InputProps> = ({ label, placeholder }) => {
  return <TextField label={label} placeholder={placeholder} />;
};

export default Input;
