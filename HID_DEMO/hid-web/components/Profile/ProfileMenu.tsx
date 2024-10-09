// import { BellRing } from "lucide-react";
import { FC  } from "react";
import AvatarIcon from "./Avatar";
import { Logos } from "@/configs/AppConfig";
import { SheetSide } from "./ProfileInfo";
import NotificationSection from "../NotificationPopup";

const ProfileMenu: FC =  () => {


   const { username, profileURL, role } = {
      username: "Cristiano Ronaldo",
      profileURL: Logos.profile,
      role: "Footballer",
   };


   
   return (
      <main className="h-16 flex  border-b-2 ">
         <section className="flex flex-grow items-center gap-8 justify-end mr-16">
            <NotificationSection />
            {/* profileAvatar */}
            <div className="flex gap-2 items-center">
               <AvatarIcon name={username} imageSource={profileURL} />
               <SheetSide />
               <div className="flex flex-col">
                  <p className="text-lg font-medium">{username}</p>
                  <p className="text-sm text-orange-500 font-medium relative bottom-1">
                     {role}
                  </p>
               </div>
            </div>
         </section>
      </main>
   );
};

export default ProfileMenu;
