import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const displays = ["none", "inline-flex", "flex"] as const;
const directions = ["row", "column", "row-reverse", "column-reverse"] as const;
const aligns = ["start", "end", "center", "baseline", "stretch"] as const;
const justifies = [
  "normal",
  "start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
  "stretch",
] as const;
const wraps = ["nowrap", "wrap", "wrap-reverse"] as const;
const gaps = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

type FlexPropsWithFlexPropDefs = {
  display?: (typeof displays)[number];
  direction?: (typeof directions)[number];
  align?: (typeof aligns)[number];
  justify?: (typeof justifies)[number];
  wrap?: (typeof wraps)[number];
  gap?: (typeof gaps)[number];
} & FlexProps;

type FlexElement = React.ElementRef<"div">;

interface FlexProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof FlexStyles> {
  asChild?: boolean;
}

const Flex = React.forwardRef<FlexElement, FlexPropsWithFlexPropDefs>(
  (props, ref) => {
    const {
      asChild,
      className,
      display = "flex",
      direction,
      align,
      justify,
      wrap,
      ...rest
    } = props;

    const Element = asChild ? Slot : "div";

    return (
      <Element
        ref={ref}
        className={mergeNames(
          FlexStyles({ display, direction, align, justify, wrap, className })
        )}
        {...rest}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex };

const FlexStyles = cva("", {
  variants: {
    display: {
      none: "hidden",
      "inline-flex": "inline-flex",
      flex: "flex",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
  },
});
