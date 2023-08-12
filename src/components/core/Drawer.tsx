import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";
import { Icon } from "@/components/core/Icon";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = (props: DrawerPrimitive.DialogPortalProps) => {
  const { className, ...rest } = props;

  return <DrawerPrimitive.Portal className={mergeNames(className)} {...rest} />;
};

DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Overlay
      className={mergeNames(
        [
          "fixed",
          "inset-0",
          "z-50",
          "bg-background/80",
          "backdrop-blur-sm",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:fade-in-0",
        ],
        className
      )}
      {...rest}
      ref={ref}
    />
  );
});

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerStyles = cva(
  [
    "fixed",
    "z-50",
    "gap-4",
    "bg-background",
    "p-6",
    "shadow-lg",
    "transition",
    "ease-in-out",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:duration-300",
    "data-[state=open]:duration-500",
  ],
  {
    variants: {
      side: {
        top: [
          "inset-x-0",
          "top-0",
          "border-b",
          "data-[state=closed]:slide-out-to-top",
          "data-[state=open]:slide-in-from-top",
        ],
        bottom: [
          "inset-x-0",
          "bottom-0",
          "border-t",
          "data-[state=closed]:slide-out-to-bottom",
          "data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0",
          "left-0",
          "h-full",
          "w-3/4",
          "border-r",
          "data-[state=closed]:slide-out-to-left",
          "data-[state=open]:slide-in-from-left",
          "sm:max-w-sm",
        ],
        right: [
          "inset-y-0",
          "right-0",
          "h-full",
          "w-3/4 ",
          "border-l",
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right",
          "sm:max-w-sm",
        ],
      },
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerStyles> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>((props, ref) => {
  const { side = "right", className, children, ...rest } = props;

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={mergeNames(drawerStyles({ side }), className)}
        {...rest}
      >
        {children}
        <DrawerPrimitive.Close
          className={mergeNames([
            "absolute",
            "right-4",
            "top-4",
            "rounded-sm",
            "opacity-70",
            "ring-offset-background",
            "transition-opacity",
            "hover:opacity-100",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-ring",
            "focus:ring-offset-2",
            "disabled:pointer-events-none",
            "data-[state=open]:bg-secondary",
          ])}
        >
          <Icon icon="close" className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DrawerPrimitive.Close>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});

DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;

  return (
    <div
      className={mergeNames(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...rest}
    />
  );
};

DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;

  return (
    <div
      className={mergeNames(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...rest}
    />
  );
};

DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={mergeNames("text-foreground text-lg font-semibold", className)}
      {...rest}
    />
  );
});

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={mergeNames("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
});

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
