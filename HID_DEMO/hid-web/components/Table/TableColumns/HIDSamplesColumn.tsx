import { ColumnDef } from "@tanstack/react-table";

import { HidSampleSchema } from "@/configs/TableSchema";
import { ChartColumnDecreasing, RotateCw } from "lucide-react";
import {
   StatusColorsHIDbySamples,
   AnalysisActionsValues,
   RefreshActionsValues,
} from "@/configs/AppConfig";
import { ConverISOtoLocalDateFormat } from "@/lib/utils";

export const HidSampleColumns: ColumnDef<HidSampleSchema>[] = [
   {
      accessorKey: "samplenumber",
      header: "Sample Number",
      cell: ({ row }) => (
         <div className="w-auto">{row.getValue("samplenumber")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
   },
   {
      accessorKey: "referencenumber",
      header: "Reference",
      cell: ({ row }) => (
         <div className="w-auto">{row.getValue("referencenumber")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
   },
   {
      accessorKey: "kind",
      header: "Kind",
      cell: ({ row }) => <div className="w-auto">{row.getValue("kind")}</div>,
      enableSorting: true,
   },
   {
      accessorKey: "patientid",
      header: "Patient ID",
      cell: ({ row }) => (
         <div className="w-auto">{row.getValue("patientid")}</div>
      ),
   },
   {
      accessorKey: "hidplateno",
      header: "HID plate ",
      cell: ({ row }) => (
         <div className="w-auto">{row.getValue("hidplateno")}</div>
      ),
   },
   {
      accessorKey: "rundate",
      header: "Run Date",
      cell:  ({ row }) => {
         const date = ConverISOtoLocalDateFormat(row.getValue("rundate"));
         return <div className="w-[140px] min-w-4 font-sans">{date}</div>;
      },
   },
   {
      accessorKey: "score",
      header: "Score",
      cell: ({ row }) => <div className="w-auto">{row.getValue("score")}</div>,
   },
   {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
         const status = row.getValue("status") as string;
         const statusClass = StatusColorsHIDbySamples[status] || "";
         return (
            <div className={`w-[150px] ${statusClass}`}>
               {row.getValue("status")}
            </div>
         );
      },
   },
   {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
         const status = row.getValue("status") as string;

         return (
            <main className="w-[100px] flex gap-4 text-md font-md justify-center items-center ">
               {AnalysisActionsValues.includes(status) && (
                  <section className="flex flex-col gap-2 items-center cursor-pointer">
                     <ChartColumnDecreasing height={15} width={15} />
                     <span className="text-xs">Analysis</span>
                  </section>
               )}

               {RefreshActionsValues.includes(status) && (
                  <section className="flex flex-col gap-2 items-center cursor-pointer">
                     <RotateCw height={15} width={15} />
                     <span className="text-xs">Refresh</span>
                  </section>
               )}
            </main>
         );
      },
   },
];
