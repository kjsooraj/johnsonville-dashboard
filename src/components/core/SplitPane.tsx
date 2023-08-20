import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

interface SplitPaneProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof SplitPaneStyles> {
  orientation?: "horizontal" | "vertical";
}

const SplitPane = React.forwardRef<HTMLDivElement, SplitPaneProps>(
  (props, ref) => {
    const { children, orientation = "horizontal", className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={mergeNames(SplitPaneStyles({ orientation, className }))}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

SplitPane.displayName = "SplitPane";

export { SplitPane };

const SplitPaneStyles = cva(["overflow-hidden"], {
  variants: {
    orientation: {
      horizontal: "h-auto w-full",
      vertical: "h-full w-auto",
    },
  },
});
