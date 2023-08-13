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
    "disabled:opacity-90",
  ],
  {
    variants: {
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
    const { children, asChild, size = "default", className, ...rest } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={mergeNames(buttonStyles({ size, className }))}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };
