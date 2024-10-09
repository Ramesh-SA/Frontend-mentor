
import React  from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useProfileSheetStore } from "@/store/AppStore";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ProfileActions from "./ProfileActions";


interface AvatarProps {
   name: string;
   imageSource: string;
}

const AvatarIcon: React.FC<AvatarProps> = ({ name, imageSource }) => {
  
   return (
      <div>
         <Popover>
            <PopoverTrigger className="relative top-1 ">
               <Avatar className="avatar">
                  <AvatarImage
                     src={imageSource}
                     className="object-cover file:object-top cursor-pointer"                     
                  />
                  <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
               </Avatar>
            </PopoverTrigger>
            <PopoverContent className="relative top-6 bg-white max-w-40">
               <ProfileActions />
            </PopoverContent>
         </Popover>
      </div>
   );
};

export default AvatarIcon;
