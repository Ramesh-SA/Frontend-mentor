import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { HidSampleSchema, HidSchema } from "@/configs/TableSchema";
import { PaginationState } from "@tanstack/react-table";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

// To get all the samples

export const GetAllSamples = ({ pageIndex, pageSize }: PaginationState) => {
   return useQuery({
      queryKey: ["hidplates", pageIndex, pageSize],
      queryFn: async (): Promise<Array<HidSchema>> => {
         const response = await fetch(
            `/api/hidsamples?pageIndex=${pageIndex}&pageSize=${pageSize}`
         );
         const users = await response.json();
         const data = users.rows;
         return data;
      },
      placeholderData: keepPreviousData,
   });
};

export const GetAllSamplesbasedonHID = ({
   pageIndex,
   pageSize,
}: PaginationState) => {
   return useQuery({
      queryKey: ["samples", pageIndex, pageSize],
      queryFn: async (): Promise<Array<HidSampleSchema>> => {
         const response = await fetch(
            `/api/getallsamplesbyhidplate?pageIndex=${pageIndex}&pageSize=${pageSize}`
         );
         const users = await response.json();
         const data = users.rows;
         return data;
      },
      placeholderData: keepPreviousData,
   });
};
interface ToastProps {
   type: string;
   message: string;
}

export const Toastify = ({ type, message }: ToastProps) => {
   switch (type) {
      case "Success":
         return toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
         });

      case "Error":
         return toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
         });
   }
};

export const ConverISOtoLocalDateFormat = (isodate: string) => {
   const isoDate = isodate;
   const date = new Date(String(isoDate));
   const day = String(date.getDate()).padStart(2, "0");
   const month = String(date.getMonth() + 1).padStart(2, "0"); 
   const year = date.getFullYear();
   const formattedDate = `${day}-${month}-${year}`;
   return formattedDate;
};
