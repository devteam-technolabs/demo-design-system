import { cva, type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./components/Button/Button";
/**
 * This will be displayed as an interface
 * @property a comment for a
 * @prop b comment for b
 * @interface
 */


export interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    /**this is test comment for description */
  asChild?: boolean,
  label: string,
  variant: any,
  size: any,
  onClick: () => void;
}

