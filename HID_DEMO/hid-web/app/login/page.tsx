"use client";

import { useRouter } from "next/navigation";
import { useLoginStore } from "@/store/AppStore";
import { Button } from "@/components/ui/button";

import "react-toastify/dist/ReactToastify.css";
import { Logos } from "@/configs/AppConfig";
import Image from "next/image";

const Page = () => {
   const { LogIn } = useLoginStore();
   const router = useRouter();

   const login = () => {
      LogIn();
      localStorage.setItem("loginSuccess", "true");
      router.push("/");
   };

   return (
      <>
         {/* <div className="flex items-center justify-center h-screen"><Button onClick={login}>Log in with Microsoft</Button></div> */}
         <main className={`flex flex-col h-screen items-center justify-center gap-3 bg-[url('https://www.geniescientific.com/wp-content/uploads/2024/01/Biotech-cover-shutterstock_2127917810.jpg')] bg-no-repeat bg-cover`}>
            <section>
               {" "}
               <Image
                  alt="app-logo"
                  src={Logos.hid_logo}
                  width={180}
                  height={80}
               />
            </section>
            <section className=" flex flex-col w-[550px] h-80 border items-center justify-center gap-3 rounded-md border-primary bg-secondary">
               <div className="font-bold text-2xl">Sign In</div>
               <div className="flex p-2 h-14">
                  {" "}
                  <Button variant={"login"} size={"login"} onClick={login}>
                     {" "}
                     <Image
                        className="mr-2"
                        src={Logos.microsoftIcon}
                        alt="microsoft-logo"
                        width={20}
                        height={5}
                     />{" "}
                     Sign In with Microsoft
                  </Button>
               </div>
            </section>
         </main>
      </>
   );
};

export default Page;
