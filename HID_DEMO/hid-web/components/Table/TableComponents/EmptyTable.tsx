import { Logos } from "@/configs/AppConfig";
import Image from "next/image";
import React from "react";

const EmptyTable: React.FC = () => {
   return (
      <div className="flex flex-col gap-5 items-center justify-center ">
         <div className="flex flex-col items-center justify-center h-48 w-48 rounded-full bg-white">
            {" "}
            <span>
               {
                  <Image
                     src={Logos.emptyTable}
                     alt="empty-table"
                     width={100}
                     height={100}
                  />
               }
            </span>
           
         </div>
         <span className="font-bold text-[1.1rem]">No Records Found</span>
      </div>
   );
};

export default EmptyTable;
