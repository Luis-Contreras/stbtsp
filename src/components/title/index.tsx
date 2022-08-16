import React, { FC } from "react";
import { TitleProps } from "./types";
import { Typography } from "@material-ui/core";

const Title: FC<TitleProps> = ({ children, variant }) => {
  return (
    <Typography variant={variant} gutterBottom>
      {children}
    </Typography>
  );
};

export default Title;
