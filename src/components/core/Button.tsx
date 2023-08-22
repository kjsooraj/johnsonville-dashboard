import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { icons } from "@/constants/icons";
import { mergeNames } from "@/lib/utils";
import { Icon, IconProps } from "@/components/core/Icon";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  icon?: keyof typeof icons;
  iconProps?: Omit<IconProps, "icon">;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      icon,
      iconProps,
      position = "start",
      variant = "default",
      className,
      ...rest
    } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={mergeNames(
          ButtonStyles({ variant }),
          icon && position && ButtonStyles({ position }),
          icon && (!children || (Array.isArray(children) && !children.length))
            ? "px-2"
            : null,
          className
        )}
        {...rest}
      >
        {icon && <Icon icon={icon} {...iconProps} />}
        {children && <span>{children}</span>}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };

const ButtonStyles = cva(
  [
    "inline-flex",
    "cursor-pointer",
    "select-none",
    "items-center",
    "justify-center",
    "px-2.5",
    "py-1.5",
    "h-8",
    "rounded",
    "border",
    "border-transparent",
    "text-center",
    "leading-snug",
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
          "border-color-divider",
          "bg-transparent",
          "text-color-secondary",
          "hover:bg-color-primary-light",
          "hover:border-color-divider-dark",
          "hover:text-color-secondary-dark",
        ],
        secondary: [
          "bg-color-primary-light",
          "text-color-secondary",
          "border-color-divider",
          "hover:bg-color-secondary-light/10",
          "hover:text-color-secondary-dark",
        ],
        ghost: [
          "hover:bg-color-primary-light",
          "hover:text-color-secondary-dark",
        ],
        link: [
          "text-color-secondary",
          "underline-offset-2",
          "hover:text-color-secondary-dark",
          "hover:underline",
        ],
      },
      position: {
        start: ["flex-row", "space-x-1.5"],
        end: ["flex-row-reverse", "space-x-reverse", "space-x-1.5"],
      },
    },
  }
);
