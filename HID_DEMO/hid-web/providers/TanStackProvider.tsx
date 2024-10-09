'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export function TanStackProvider({ children }: { children: React.ReactNode }) {
   const [isMounted, setIsMounted] = useState(false);
   const [queryClient] = useState(() => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, 
          gcTime: 1000 * 60 * 5, 
        },
      },
    }));

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   return (
      <QueryClientProvider  client={queryClient}>{children}</QueryClientProvider>
   );
}
