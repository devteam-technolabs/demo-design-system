import { cva, type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./components/Button/Button";

export interface ButtonPropsType
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    variant: any,
    size: any,
    label: string;
    onClick: () => void;
}