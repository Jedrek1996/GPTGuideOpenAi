"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // the data will be considered fresh for 1 minute (stored in memory data, after 1 min > it will be placed needs to be refetch from the cache (faster than calling the method again), if there is a  cacheTime: 1000 * 60 * 10, // the cache will be cleared after this time)
      staleTime: 60 * 1000,
    },
  },
});

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-center" />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default Providers;
