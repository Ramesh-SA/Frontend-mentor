"use client";
import AppLayout from "@/components/AppLayout";
import Header from "@/components/HeaderComponent";
import IndividualHidDetails from "@/components/IndividualHidStats";
import { DataTable } from "@/components/Table/TableComponents/data-table";
import { HidSampleColumns } from "@/components/Table/TableColumns/HIDSamplesColumn";
import { HidSampleSchema } from "@/configs/TableSchema";
import { GetAllSamplesbasedonHID } from "@/lib/utils";
import { PaginationState } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
   const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 25,
   });

   const { data , isLoading } = GetAllSamplesbasedonHID(pagination);
   const searchParams = useSearchParams()

   console.log("ID " , searchParams.get("id"));

   const sample: HidSampleSchema[] = data ?? [];

   if(isLoading) return <div>Loading...</div>

 
   return (
      <AppLayout>
         <main className="flex flex-col w-full gap-10">
            <IndividualHidDetails />
            <Header text="Sample Table" classnames="header-primary" />
            {!isLoading &&<DataTable
               data={sample}
               columns={HidSampleColumns}
               pagination={pagination}
               setPagination={setPagination}
            />
}
         </main>
      </AppLayout>
   );
};

export default Page;
