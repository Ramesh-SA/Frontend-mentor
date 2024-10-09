import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
   table: Table<TData>;
   searchplaceHolder: string;
   searchColumns: string;
}

export function DataTableToolbar<TData>({
   table,
   searchplaceHolder,
   searchColumns,
}: DataTableToolbarProps<TData>) {
   const isFiltered = table.getState().columnFilters.length > 0;

   return (
      <div className="flex justify-end">
         <div className="flex items-center flex-end space-x-2 relative right-4">
            {isFiltered && (
               <Button
                  variant="ghost"
                  onClick={() => table.resetColumnFilters()}
                  className="h-8 px-2 lg:px-3 bg-secondary"
               >
                  Reset
                  <Cross2Icon className="ml-2 h-4 w-4" />
               </Button>
            )}

            <Input
               placeholder={searchplaceHolder}
               value={
                  (table
                     .getColumn(searchColumns)
                     ?.getFilterValue() as string) ?? ""
               }
               onChange={(event) =>
                  table
                     .getColumn(searchColumns)
                     ?.setFilterValue(event.target.value)
               }
               className="h-8 w-[17rem] placeholder:text-base font-normal"
            />
         </div>
        
      </div>
   );
}
