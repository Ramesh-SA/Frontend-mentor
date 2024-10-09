// stores/useButtonStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Cookies from "js-cookie";
import { HidSchema } from "@/configs/TableSchema";

interface Buttonstate {
   activeButtonId: number | null;
   isAdmin: boolean;
}

interface ButtonstateActions {
   setActiveButtonId: (id: number) => void;
   setIsAdmin: (adminstate: boolean) => void;
}

export const useButtonStore = create<Buttonstate & ButtonstateActions>(
   (set) => ({
      activeButtonId: 1,
      isAdmin: false,
      setActiveButtonId: (id) => set({ activeButtonId: id }),
      setIsAdmin: (adminstate) => set({ isAdmin: adminstate }),
   })
);

// Store for controlling the Profile details sheet

interface SheetState {
   isOpen: boolean;
   openSheet: () => void;
   closeSheet: () => void;
}

export const useProfileSheetStore = create<SheetState>((set) => ({
   isOpen: false,
   openSheet: () => set({ isOpen: true }),
   closeSheet: () => set({ isOpen: false }),
}));

// Store for controlling the Notification State

interface NotificationPopupState {
   isNewNotifications: boolean;
   setIsNewNotifications: () => void;
}

export const useNotificationStore = create<NotificationPopupState>((set) => ({
   isNewNotifications: true,
   setIsNewNotifications: () => set({ isNewNotifications: false }),
}));

interface LoginState {
   isLoggedIn: boolean;
   LogIn: () => void;
   LogOut: () => void;
   hasHydrated: boolean;
   setHasHydrated: (hydrated: boolean) => void;
}

export const useLoginStore = create<LoginState>()(
   persist(
      (set) => ({
         isLoggedIn: false,
         LogIn: () => {
            set({ isLoggedIn: true });
            Cookies.set("isLoggedIn", "true");
         },
         LogOut: () => {
            set({ isLoggedIn: false });
            Cookies.set("isLoggedIn", "false");
         },
         hasHydrated: false,
         setHasHydrated: (hydrated: boolean) => set({ hasHydrated: hydrated }),
      }),
      {
         name: "login-storage",
         onRehydrateStorage: () => (state) => {
            state?.setHasHydrated(true);
         },
      }
   )
);

export const useRowStore = create((set) => ({
   selectedRow: null,
   setSelectedRow: (row: string) => set({ selectedRow: row }),
}));

interface SamplesByHIDPlate {
   platenumber: string;
   runtime: string;
   samplenumber: number;
   setclickedRowDetails: (data: HidSchema) => void;
}

export const samplesByHIDPlateStore = create<SamplesByHIDPlate>()(
   persist(
      (set) => ({
         platenumber: "",
         runtime: "",
         samplenumber: 0,
         setclickedRowDetails: (rowdata: HidSchema) =>
            set({
               platenumber: rowdata.platenumber,
               runtime: rowdata.runtime,
               samplenumber: rowdata.samplenumber,
            }),
      }),
      {
         name: "sample-storage", // name of the item in the storage (must be unique)
         storage: createJSONStorage(() => sessionStorage), // Use sessionStorage
      }
   )
);
