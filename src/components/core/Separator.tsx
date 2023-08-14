import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const separatorStyles = cva("shrink-0 bg-color-divider", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
  },
});

interface SeparatorOwnProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorOwnProps & VariantProps<typeof separatorStyles>
>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={mergeNames(separatorStyles({ orientation, className }))}
      {...rest}
    />
  );
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
