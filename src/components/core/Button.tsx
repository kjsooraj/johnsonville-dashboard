import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const buttonStyles = cva(
  [
    "inline-flex",
    "cursor-pointer",
    "select-none",
    "items-center",
    "justify-center",
    "rounded",
    "border",
    "border-transparent",
    "text-center",
    "transition-all",
    "disabled:opacity-90",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-color-accent",
          "text-color-accent-contr",
          "hover:bg-color-accent-dark",
        ],
        destructive: [
          "bg-color-danger",
          "text-color-accent-contr",
          "hover:bg-color-danger-dark",
        ],
        outline: [
          "border",
          "border-input",
          "bg-background",
          "hover:bg-accent",
          "hover:text-accent-foreground",
        ],
        secondary: [
          "bg-color-primary-light",
          "text-color-secondary-dark",
          "border-color-divider",
          "hover:bg-color-secondary-light/10",
        ],
        ghost: ["hover:bg-accent", "hover:text-accent-foreground"],
        link: ["text-primary", "underline-offset-4", "hover:underline"],
      },
      size: {
        default: "px-2.5 py-1.5",
        icon: "py-1 px-1",
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
      children,
      asChild,
      size = "default",
      variant = "default",
      className,
      ...rest
    } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={mergeNames(buttonStyles({ variant, size, className }))}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };
