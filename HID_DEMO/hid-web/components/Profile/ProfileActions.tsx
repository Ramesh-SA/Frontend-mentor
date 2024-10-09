'use client'
import React from "react";
import { Button } from "../ui/button";
import { useLoginStore, useProfileSheetStore } from "@/store/AppStore";
import { useRouter } from "next/navigation";

const ProfileActions: React.FC = () => {
   const openSheet = useProfileSheetStore((state) => state.openSheet);
   const {  LogOut } = useLoginStore();
   const router = useRouter();

   const logOut = () => {
      LogOut();
      router.push("/");
   };

   return (
      <>
         <div className="flex flex-col gap-3 p-[2px]">
            <Button
               variant={"profilebtn"}
               size={"sm"}
               styles={"profilebtn"}
               onClick={openSheet}
            >
               {" "}
               My Profile{" "}
            </Button>
            <Button
               variant={"profilebtn"}
               size={"sm"}
               styles={"profilebtn"}
               onClick={logOut}
            >
               {" "}
               Logout{" "}
            </Button>
         </div>
      </>
   );
};

export default ProfileActions;
