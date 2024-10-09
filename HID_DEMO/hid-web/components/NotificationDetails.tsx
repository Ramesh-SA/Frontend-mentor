'use client'
import { NotificationDetailsProps } from "@/configs/ComponentInterfaces";
import React from "react";



 
const NotoficationDetails: React.FC<NotificationDetailsProps> = ( {notificationData}) => {

   return (
      <main className="flex flex-col gap-2 max-h-[25rem] overflow-y-scroll">
         {notificationData.map((data) => (
            <section className="bg-secondary p-2 text-sm flex flex-col gap-5 text-justify" key={data.message}>
               <p>{data.message}</p>
               <div className="flex justify-between">
                  <span className="text-primary text-xs text-left font-bold ">{data.date}</span>
                  <span className="text-primary text-xs font-bold">{data.time}</span>
               </div>
            </section>
         ))}
      </main>
   );
};

export default NotoficationDetails;
