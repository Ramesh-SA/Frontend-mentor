import { Table } from "@tanstack/react-table";
import ReactPaginate from "react-paginate";
import { Button } from "../../ui/button";

interface DataTablePaginationProps<TData> {
   table: Table<TData>;
}

export function Pagination<TData>({ table }: DataTablePaginationProps<TData>) {
   function handlePageClick(event: { selected: never }) {
      const newPageIndex = event.selected;
      table.setPageIndex(newPageIndex);
   }
   const totalPageCount = table.getRowCount();
   const paginationNumberCount = Math.ceil(
      totalPageCount / table.getState().pagination.pageSize
   );
   const currentPage = table.getState().pagination.pageIndex;

   const PreviousArrow = () => (
      <>
         <span className="text-lg">&lt;</span>
         <span> Back </span>
      </>
   );

   const NextArrow = () => (
      <>
         <span>Next</span>
         <span className="text-lg"> &gt;</span>
      </>
   );

   return (
      <main className="flex justify-end bg-white">
         <div className="flex items-center gap-4  text-sm justify-end relative right-4 p-2">
            <div className="flex items-center gap-2  text-sm">
               <ReactPaginate
                  previousLabel={<PreviousArrow />}
                  nextLabel={<NextArrow />}
                  breakLabel={"..."}
                  pageCount={paginationNumberCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  forcePage={currentPage}
               />
               <div className="flex text-sm gap-4 items-center">
                  <span>Results per page</span>

                  <Button variant={"pagination"} size={"paginationsmall"}>
                     <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                           table.setPageSize(Number(e.target.value));
                           table.setPageIndex(0);
                        }}
                        className="border pl-[5px] w-14 h-7 outline-none"
                     >
                        {[25,50,75,100].map((pageSize) => (
                           <option key={pageSize} value={pageSize}>
                              {pageSize}
                           </option>
                        ))}
                     </select>
                  </Button>
               </div>
            </div>
         </div>

         {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
      </main>
   );
}

export default Pagination;
