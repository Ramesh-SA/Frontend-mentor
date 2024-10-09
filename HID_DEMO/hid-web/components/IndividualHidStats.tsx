import { ConverISOtoLocalDateFormat } from "@/lib/utils";
import { samplesByHIDPlateStore } from "@/store/AppStore";
import React from "react";

const IndividualHidDetails: React.FC = () => {
   const { platenumber, runtime, samplenumber } = samplesByHIDPlateStore();
   const formattedTime = ConverISOtoLocalDateFormat(runtime)
   return (
      <section className="flex p-2 border border-slate-400 bg-inactive rounded-md justify-around text-sm font-medium">
         <span>HID Plate : {platenumber}</span>
         <span>Run Date : {formattedTime}</span>
         <span>Number of Sample : {samplenumber}</span>
      </section>
   );
};

export default IndividualHidDetails;
