import { Folder, FileText, File, Users } from "lucide-react"; // Lucide icons

export const Sidebarconfig = [
   {
      id: 1,
      label: "HID Plate",
      href: "/dashboard",
      requiresAdmin: false,
      Icon: Folder,
   },
   {
      id: 2,
      label: "Sample",
      href: "/sample",
      requiresAdmin: false,
      Icon: File,
   },
   {
      id: 3,
      label: "Import Log",
      href: "/log",
      requiresAdmin: false,
      Icon: FileText,
   },
   { id: 4, label: "Users", href: "/users", requiresAdmin: true, Icon: Users },
];

export const Logos = {
   hid_logo: "/images/HidLogo.png",
   profile: "/images/CR7.jpg",
   emptyTable: "/images/bi_folder.png",
   microsoftIcon: "/images/microsoftLogo.png",
   lab : "/images/lab.jpg"
};

export const labels = [
   {
      value: "bug",
      label: "Bug",
   },
   {
      value: "feature",
      label: "Feature",
   },
   {
      value: "documentation",
      label: "Documentation",
   },
];

export const statuses = [
   {
      value: "backlog",
      label: "Backlog",
   },
   {
      value: "todo",
      label: "Todo",
   },
   {
      value: "in progress",
      label: "In Progress",
   },
   {
      value: "done",
      label: "Done",
   },
   {
      value: "canceled",
      label: "Canceled",
   },
];

export const status = [
   {
      value: "active",
      label: "Active",
   },
   {
      value: "inactive",
      label: "InActive",
   },
];

export const priorities = [
   {
      label: "Low",
      value: "low",
   },
   {
      label: "Medium",
      value: "medium",
   },
   {
      label: "High",
      value: "high",
   },
];

export const StatusColorsHIDbySamples: Record<string, string> = {
   Matched: "text-green-500",
   "Not Matched": "text-red-500",
};

export const HIDSampleStatus = [
   "Matched",
   "Not Matched",
   "Pending Calculation",
   "Patient ID not found",
   "Sample number not found",
   "Reference for this sample not found",
   "Sample has a missing fragment list data",
   "Sample has a bad fragment list data",
   "Reference has a missing fragment list data",
   "Reference has a bad fragment list data"
];

export const AnalysisActionsValues = ["Matched","Not Matched"]
export const RefreshActionsValues = ["Patient ID not found","Reference for this sample not found"]
