"use client";

import * as React from "react";

import {
   ColumnDef,
   ColumnFiltersState,
   SortingState,
   VisibilityState,
   flexRender,
   getCoreRowModel,
   getFacetedRowModel,
   getFacetedUniqueValues,
   getFilteredRowModel,
   getSortedRowModel,
   useReactTable,
   PaginationState,
   // getPaginationRowModel,
} from "@tanstack/react-table";

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";


import EmptyTable from "./EmptyTable";
import { LucideArrowUp, LucideArrowDown } from "lucide-react";
import Pagination from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
   pagination: PaginationState;
   setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
}

export function DataTable<TData, TValue>({
   columns,
   data,
   pagination,
   setPagination,
}: DataTableProps<TData, TValue>) {


   const [rowSelection, setRowSelection] = React.useState({});
   const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
   const [sorting, setSorting] = React.useState<SortingState>([]);

   const table = useReactTable({
      data,
      columns,
      state: {
         sorting,
         columnVisibility,
         rowSelection,
         columnFilters,
         pagination,
      },
      enableRowSelection: true,
      rowCount: 100,
      onRowSelectionChange: setRowSelection,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      // getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      onPaginationChange: setPagination,
      manualPagination: true,
   });

   return (
      <>
         <div className="table-container">
            <DataTableToolbar table={table} searchColumns="platenumber" searchplaceHolder="Search Plane Number, Operator"/>
            <section className="flex flex-col border border-primary gap-4 p-2 bg-secondary rounded-3xl">
               <div className="overflow-auto  bg-secondary rounded-2xl h-[30rem]">
                  <Table
                     className={`bg-secondary striped-table ${
                        !table.getRowModel().rows?.length && "h-full"
                     }`}
                  >
                     <TableHeader className="sticky top-0 bg-secondary font-bold">
                        {table.getHeaderGroups().map((headerGroup) => (
                           <tr key={headerGroup.id}>
                              {headerGroup.headers.map((header) => {
                                 return (
                                    <TableHead
                                       key={header.id}
                                       className="text-base font-bold"
                                       colSpan={header.colSpan}
                                    >
                                       {header.isPlaceholder ? null : (
                                          <div
                                             className={
                                                header.column.getCanSort()
                                                   ? "cursor-pointer select-none"
                                                   : ""
                                             }
                                             onClick={header.column.getToggleSortingHandler()}
                                             title={
                                                header.column.getCanSort()
                                                   ? header.column.getNextSortingOrder() ===
                                                     "asc"
                                                      ? "Sort ascending"
                                                      : header.column.getNextSortingOrder() ===
                                                        "desc"
                                                      ? "Sort descending"
                                                      : "Clear sort"
                                                   : undefined
                                             }
                                          >
                                             <div className="flex ml-4">
                                                {" "}
                                                {flexRender(
                                                   header.column.columnDef
                                                      .header,
                                                   header.getContext()
                                                )}
                                                {{
                                                   asc: <LucideArrowUp />,
                                                   desc: <LucideArrowDown />,
                                                }[
                                                   header.column.getIsSorted() as string
                                                ] ?? null}
                                             </div>
                                          </div>
                                       )}
                                    </TableHead>
                                 );
                              })}
                           </tr>
                        ))}
                     </TableHeader>
                     <TableBody>
                        {table.getRowModel().rows?.length ? (
                           table.getRowModel().rows.map((row, index) => (
                              <TableRow
                                 key={row.id}
                                 id={row.id}
                                 data-state={row.getIsSelected() && "selected"}
                                 className={` h-10 ${
                                    index % 2 === 0
                                       ? "bg-white"
                                       : "bg-secondary"
                                 } `}
                              >
                                 {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                       <div className="flex ml-4">
                                          {flexRender(
                                             cell.column.columnDef.cell,
                                             cell.getContext()
                                          )}
                                       </div>
                                    </TableCell>
                                 ))}
                              </TableRow>
                           ))
                        ) : (
                           <TableRow className="bg-secondary">
                              <TableCell
                                 colSpan={columns.length}
                                 className="h-24 text-center text-base"
                              >
                                 <EmptyTable />
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </div>

               <Pagination table={table} />
            </section>
         </div>
      </>
   );
}
