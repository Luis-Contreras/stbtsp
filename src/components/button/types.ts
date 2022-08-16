export interface ButtonProps {
  primary?: boolean;
  color: Color;
  size?: "small" | "medium" | "large" | undefined;
  children: JSX.Element | string;
  onClick: () => void;
}

type Color = "inherit" | "primary" | "secondary" | "default" | undefined;
