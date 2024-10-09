"use client";


import { Sidebarconfig } from "@/configs/AppConfig";
import Sidebarbtn from "./Sidebarbtn";
import { useButtonStore } from "@/store/AppStore";
import { FC } from "react";

const SidebarButtons: FC = () => {
   const activeButtonID = useButtonStore((state) => state.activeButtonId);
   const isAdmin = useButtonStore((state) => state.isAdmin);
   const updateID = useButtonStore((state) => state.setActiveButtonId);
   return (
      <>
         {Sidebarconfig.map((button) => {
            if (button.requiresAdmin && !isAdmin) {
               return null;
            }

            const Icon = button.Icon;
            const isactive = activeButtonID === button.id;

            return (
               <Sidebarbtn
                  isactive={isactive}
                  key={button.id}
                  url={button.href}
                  onClick={() => updateID(button.id)}
               >
                  {Icon && (
                     <Icon
                        className={`primary-icon ${
                           isactive ? "text-white" : "text-black"
                        }`}
                     />
                  )}
                  {button.label}
               </Sidebarbtn>
            );
         })}
      </>
   );
};

export default SidebarButtons;
