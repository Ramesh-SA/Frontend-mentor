"use client";
import {  useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/store/AppStore";

export default function Home() {
   const { isLoggedIn, hasHydrated } = useLoginStore();
   const router = useRouter();



   useEffect(() => {
      if (hasHydrated) {
         if (isLoggedIn) {
            router.push("/dashboard");
         } else {
            router.push("/login");
         }
      }
   }, [hasHydrated, isLoggedIn, router]);

   return (
      <>
       <></>
      </>
   );
}
