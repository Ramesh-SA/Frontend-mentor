import "/app/globals.css";
// app\globals.css

import ProfileMenu from "@/components/Profile/ProfileMenu";
import SideMenu from "@/components/SideMenu/SideMenuBar";
import Breadcrumbs from "@/components/BreadCrumps";
import { ToastContainer } from "react-toastify";

export default function AppLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {

   return (
      <div className="flex">
          <ToastContainer />
         <SideMenu />
         <div className="flex flex-col flex-grow gap-5">
            <ProfileMenu />
            <Breadcrumbs />
            <main className="p-6 flex flex-grow">{children}</main>
         </div>
      </div>
   );
}
