"use client";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useProfileSheetStore } from "@/store/AppStore";
import { FC } from "react";

interface userdetails {
   firstname: string;
   lastname: string;
   userid: string;
   email: string;
}
interface userDetailsProps {
   label: string;
   value: string;
}

export function SheetSide() {
   const { isOpen, openSheet, closeSheet } = useProfileSheetStore();

   const userDetails: userdetails = {
      firstname: "Ramesh",
      lastname: "S",
      userid: "7",
      email: "cr7@goat.com",
   };

   const labelsArray: { [key in keyof typeof userDetails]: string } = {
      firstname: "First Name",
      lastname: "Last Name",
      userid: "User Id",
      email: "Email Address",
   };

   const UserDetails: FC<userDetailsProps> = ({ label, value }) => {
      return (
         <div className="flex flex-col flex-grow gap-2 align-middle">
            <Label htmlFor="name">
               {labelsArray[label as keyof typeof userDetails]}
            </Label>
            <Input
               id="name"
               value={value}
               autoFocus={false}
               readOnly
               tabIndex={-1}
            />
         </div>
      );
   };

   return (
      <Sheet
         aria-describedby={null}
         key={"right"}
         open={isOpen}
         onOpenChange={(open) => (open ? openSheet() : closeSheet())}
      >
         <SheetContent side={"right"} className="w-[350px] p-4" aria-describedby="null">
            <section className="flex flex-col relative top-8">
               <SheetHeader>
                  <SheetTitle className="text-center mb-3">
                     Profile Info
                  </SheetTitle>
                  <SheetDescription />
               </SheetHeader>
               {Object.entries(userDetails).map(([key, keyvalue]) => (
                  <div
                     key={key}
                     className="flex flex-col py-4 bg-secondary rounded-md p-2 gap-5"
                  >
                     <UserDetails label={key} value={keyvalue} />
                  </div>
               ))}
            </section>
         </SheetContent>
      </Sheet>
   );
}
