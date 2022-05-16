import { default as MuiButton } from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps & {};

const Button = ({ children, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
