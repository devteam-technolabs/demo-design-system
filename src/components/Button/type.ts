import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";

export interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  label: string;
  onClick: () => void;
}

