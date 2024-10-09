"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { HidSchema } from "@/configs/TableSchema";
import { samplesByHIDPlateStore } from "@/store/AppStore";
import { ConverISOtoLocalDateFormat } from "@/lib/utils";

export const getColumns = () => {
const {setclickedRowDetails} = samplesByHIDPlateStore()

   const columns: ColumnDef<HidSchema>[] = [
      {
         accessorKey: "platenumber",
         header: "Plate Number",
         cell: ({ row }) => (
            <div className="w-[80px] cursor-pointer">
               <Link
                  
                  onClick={() => {
                     const rowData = row.original;
                     setclickedRowDetails(rowData);
                  }}
                  className="underline underline-offset-[6px]"
                  href={{pathname:"/dashboard/Sample-by-HID-plate"}}
               
               >
                  {row.getValue("platenumber")}
               </Link>
            </div>
         ),
         enableSorting: false,
         enableHiding: false,
      },
      {
         accessorKey: "operatorname",
         header: "Operator Name",
         cell: ({ row }) => (
            <div className="w-[80px]">{row.getValue("operatorname")}</div>
         ),
         enableSorting: false,
         enableHiding: false,
      },
      {
         accessorKey: "runtime",
         header: "Run Time",
         cell:  ({ row }) => {
            const date = ConverISOtoLocalDateFormat(row.getValue("runtime"));
            return <div className="w-[140px] min-w-4 font-sans">{date}</div>;
         },
         enableSorting: true,
      },
      {
         accessorKey: "samplenumber",
         header: "Sample Number",
         cell: ({ row }) => (
            <div className="w-[80px]">{row.getValue("samplenumber")}</div>
         ),
      },
   ];

   return columns;
};
