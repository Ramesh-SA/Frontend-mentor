import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50",
   {
      variants: {
         variant: {
            primary: "bg-primary text-white",
            secondary:"bg-inactive text-black font-bold",
            outline:
               "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
           pagination: " text-sm",
           profilebtn:"bg-secondary text-black",
           login: "bg-white border hover:bg-zinc-50"

         },
         size: {
            primary: "h-10 px-4 py-2 rounded-xl",
            sm: "h-7 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
            pagination : "h-[28px] w-max p-[10px] ",
            paginationsmall : "h-[28px] w-[28px]",
            login : "p-[11px] rounded-md font-medium text-xl border border-slate-400  "
         },
         styles: {
          primary: "h-10 px-4 py-2 rounded-xl",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
          profilebtn : "text-base font-medium"
          
       },
      },
      defaultVariants: {
         variant: "primary",
         size: "primary",
      },
   }
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      );
   }
);
Button.displayName = "Button";

export { Button, buttonVariants };
