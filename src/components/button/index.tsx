import React, { FC } from "react";
import { ButtonProps } from "./types";
import { Button as MuButton } from "@material-ui/core";

const Button: FC<ButtonProps> = ({ children, color, onClick, size }) => {
  return (
    <MuButton
      variant="contained"
      color={color}
      size={size}
      onClick={() => onClick()}>
      {children}
    </MuButton>
  );
};

export default Button;
