import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof ToggleStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={mergeNames(ToggleStyles({ className }))}
      {...rest}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };

const ToggleStyles = cva("", {
  variants: {},
});
