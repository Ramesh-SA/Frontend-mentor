import { Button, ButtonProps } from "../ui/button";
import React from "react";
import Link from "next/link";

// Sidebarbtn component that accepts any props that can be passed to the Button
interface SidebarbtnProps extends ButtonProps {
   isactive: boolean;
   url: string;
   children: React.ReactNode;
}

const Sidebarbtn: React.FC<SidebarbtnProps> = ({
   isactive,
   url,
   children,
   ...buttonProps
}) => {
   return (
      <Button
         asChild
         className="flex items-center justify-start mb-2"
         {...buttonProps}
         variant={isactive ? "primary" : "secondary"}
      >
         <Link href={url}>{children}</Link>
      </Button>
   );
};

export default Sidebarbtn;
