// components/DynamicBreadcrumbs.tsx
"use client";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Breadcrumbs = () => {
   const [pathArray, setPathArray] = useState<string[]>([]);
   const pathname = usePathname();

   useEffect(() => {
      const pathSegments = pathname.split("/").filter((path) => path);
      setPathArray(pathSegments);
   }, [pathname]);

   const capitalize = (word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1);

   return (
      <Breadcrumb className="flex items-center gap-1 bg-secondary w-fit rounded-md relative left-3 top-3">
         <BreadcrumbItem>
            {" "}
            <span className="font-bold text-base">
               <Link href={"/dashboard"}>HID Plate</Link>
            </span>
         </BreadcrumbItem>

         {pathArray.map((path, index) => {
            if (path !== "dashboard") {
               const href = "/" + pathArray.slice(0, index + 1).join("/");
               return (
                  <div className="flex items-center" key={href}>
                     {<ChevronRight height={20} width={20} />}
                     <Link href={href}>
                        <span className="font-bold text-base">
                           {capitalize(path.replace(/-/g, " "))}
                        </span>
                     </Link>
                  </div>
               );
            }
         })}
      </Breadcrumb>
   );
};

export default Breadcrumbs;
