import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "text-sm",
    "font-medium",
    "ring-offset-background",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary/90",
        ],
        destructive: [
          "bg-destructive",
          "text-destructive-foreground",
          "hover:bg-destructive/90",
        ],
        outline: [
          "border",
          "border-input",
          "bg-background",
          "hover:bg-accent",
          "hover:text-accent-foreground",
        ],
        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary/80",
        ],
        ghost: ["hover:bg-accent", "hover:text-accent-foreground"],
        link: ["text-primary", "underline-offset-4", "hover:underline"],
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...rest
    } = props;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={mergeNames(buttonStyles({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
