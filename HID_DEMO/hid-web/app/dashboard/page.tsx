"use client";

import AppLayout from "@/components/AppLayout";
// import Breadcrumbs from "@/components/BreadCrumps";
import Header from "@/components/HeaderComponent";
import HidStats from "@/components/HidStats";
import { DataTable } from "@/components/Table/TableComponents/data-table";
import { getColumns } from "@/components/Table/TableColumns/HidPlateColumn";
import { HidSchema } from "@/configs/TableSchema";
import { GetAllSamples, Toastify } from "@/lib/utils";
import { PaginationState } from "@tanstack/react-table";
import React, { useEffect } from "react";


// import { data } from "@/configs/data";

const Dashboard = () => {
   const stats = [
      {
         heading: "Sample Files Imported",
         yearstats: "350",
         year: "2024",
         monthstats: "240",
         month: "October",
      },

      {
         heading: "Reference Files Imported",
         yearstats: "108",
         year: "2024",
         monthstats: "214",
         month: "October",
      },
   ];

   const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 25,
   });


   useEffect(() => {

     
     
      const loginSuccess = localStorage.getItem("loginSuccess");
      if (loginSuccess) {
         Toastify({ type: "Success", message: "Signed in successfully!" });

          
         setTimeout(() => localStorage.removeItem("loginSuccess"), 3000);
      }
   }, []);

   

   const { data } = GetAllSamples(pagination);

   const sample: HidSchema[] = data ?? [];
 
   return (
      <AppLayout>
         <main className="flex flex-col gap-5 rounded-xl flex-grow">
            <Header text="Stats" classnames="header-primary" />
            <section className="flex gap-5 flex-wrap">
               {stats.map((data, index) => (
                  <HidStats
                     key={index}
                     heading={data.heading}
                     yearstats={data.yearstats}
                     year={data.year}
                     monthstats={data.monthstats}
                     month={data.month}
                  />
               ))}
            </section>
            <Header text="HID plate" classnames="header-primary" />
            <DataTable
               data={sample}
               columns={getColumns()}
               pagination={pagination}
               setPagination={setPagination}
            />
         </main>
      </AppLayout>
   );
};

export default Dashboard;
