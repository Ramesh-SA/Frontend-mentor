import { FC } from "react";
import SidebarButtons from "./SidebarButtons";
import { Logos } from "@/configs/AppConfig";
import Image from "next/image";


const SideMenu: FC = () => {
   return (
      <div className="sidebar_wrapper">

         {/* App logo */}
         
         <div className="flex items-center mx-4 mb-8">
         <Image alt="app-logo" src={Logos.hid_logo} width={180} height={80} />
         </div>

         {/* Sidebar buttons */}
         <div className="flex flex-col gap-3">
            <SidebarButtons />
         </div>
      </div>
   );
};

export default SideMenu;
