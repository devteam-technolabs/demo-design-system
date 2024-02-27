import { cva, type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  variant : any,
  size : any,
  label: string;
  onClick: () => void;
}


export type TableData = {
  data: {
    map(arg0: (item: any, index: any) => import("react/jsx-dev-runtime").JSX.Element): import("react").ReactNode;
    prop: String,
    description: string,
    type: string
  }
}

export const buttonProps = [
  {
    prop: "className",
    description: "Additional CSS classes",
    type: "string"
  },
  {
    prop: "variant",
    description: "Visual style or variant of the button",
    type: " default |  destructive  |  outline  |  secondary  |  ghost  | link "
  },
  {
    prop: "size",
    description: "Size of the button",
    type: "default | sm | lg"
  },
  {
    prop: "asChild",
    description: "Flag indicating whether to use Slot component instead of button element",
    type: "boolean"
  },
  {
    prop: "props",
    description: "Additional props to pass to the underlying component",
    type: "object"
  }
];


