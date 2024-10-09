'use client'
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Bell } from "lucide-react";
import NotoficationDetails from "./NotificationDetails";
import { useNotificationStore } from "@/store/AppStore";

const NotificationSection: React.FC = () => {
   const { isNewNotifications, setIsNewNotifications } = useNotificationStore();

   const notificationData = [
      {
         message:
            "Lorem Ipsum is simply  of the printing and typesetting industry.",
         date: "Dec 3,2024",
         time: "8.30 AM",
      },
      {
         message:
            "Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
         date: "Nov 9,2024",
         time: "5.30 PM",
      },
      {
         message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting indust",
         date: "Dec 3,2024",
         time: "8.30 AM",
      },
      {
         message:
            "LIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
         date: "Nov 9,2024",
         time: "5.30 PM",
      },
      {
         message:
            "Lorem Ipsum is simply dummy text of the printing and tsetting industry.",
         date: "Dec 3,2024",
         time: "8.30 AM",
      },
      {
         message:
            "Lorem Ipsum  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
         date: "Nov 9,2024",
         time: "5.30 PM",
      },
      {
         message:
            "Lorem Ipsum is simply dummy text of the  and typesetting industry.",
         date: "Dec 3,2024",
         time: "8.30 AM",
      },
      {
         message:
            "Lorem Ipsum has been the 's standard dummy text ever since the , when an unknown printer took a galley of type and scrambled it to make a type specimen book",
         date: "Nov 9,2024",
         time: "5.30 PM",
      },
   ];

   return (
      <main>
         <Popover>
            <PopoverTrigger
               className="relative top-1 "
               onClick={setIsNewNotifications}
            >
               {" "}
               <Bell className="cursor-pointer h-7 w-7" />
               {isNewNotifications && (
                  <div className="flex justify-center items-center absolute bottom-4 left-4 h-5 w-5 rounded-full bg-[red] text-white text-[10px] p-[1px] font-bold">
                     {notificationData.length}
                  </div>
               )}
            </PopoverTrigger>
            <PopoverContent className="relative top-6 bg-white min-w-96">
               <NotoficationDetails notificationData={notificationData} />
            </PopoverContent>
         </Popover>
      </main>
   );
};

export default NotificationSection;
