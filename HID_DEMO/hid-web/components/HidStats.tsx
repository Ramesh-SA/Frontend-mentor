import { File } from "lucide-react";
import React from "react";


interface HidStatsProps {
   heading: string;
   year: string;
   yearstats: string;
   month: string;
   monthstats: string;
}

interface HidDetailsProps {
   count: string;
   label: string;
   labelValue: string;
}

const HidStats: React.FC<HidStatsProps> = ({
   heading,
   year,
   yearstats,
   month,
   monthstats,
}) => {
   const HidDetails: React.FC<HidDetailsProps> = ({
      count,
      label,
      labelValue,
   }) => {
      return (
         <div className="flex flex-col gap-1">
            <span className="text-max font-bold leading-8 tracking-[2px]">{count}</span>
            <span className="text-sm font-medium">
               {label} : {labelValue}
            </span>
         </div>
      );
   };

   return (
  
         <main className="flex flex-grow h-28 gap-6 border items-center  bg-secondary rounded-xl ">
            <div className="rounded-full bg-white p-2 mb-5 h-10 w-10 flex items-center justify-center ml-3">
               {" "}
               <File className=" text-primary " />
            </div>

            <div>
               <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-medium"> {heading}</h4>

                  <div className="flex gap-20">
                     <HidDetails
                        count={yearstats}
                        label="Year"
                        labelValue={year}
                     />
                     <HidDetails
                        count={monthstats}
                        label="Month"
                        labelValue={month}
                     />
                  </div>
               </div>
            </div>
         </main>
   
   );
};

export default HidStats;
