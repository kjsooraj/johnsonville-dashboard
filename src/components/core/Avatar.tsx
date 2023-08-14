import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { mergeNames } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={mergeNames(
        [
          "relative",
          "flex",
          "h-10",
          "w-10",
          "select-none",
          "shrink-0",
          "rounded-full",
          "border",
          "border-color-divider-dark",
          "bg-color-primary",
          "font-semibold",
        ],
        className
      )}
      {...rest}
    >
      {children}
      <span
        className={
          "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-color-primary bg-color-success-dark"
        }
      />
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={mergeNames("aspect-square h-full w-full", className)}
      {...rest}
    />
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={mergeNames(
        [
          "flex",
          "h-full",
          "w-full",
          "items-center",
          "justify-center",
          "rounded-full",
          "text-sm",
          "font-semibold",
          "leading-none",
          "text-color-secondary",
        ],
        className
      )}
      {...rest}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
