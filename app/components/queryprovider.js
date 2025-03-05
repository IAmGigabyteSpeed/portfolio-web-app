"use client"; // Ensures this runs only on the client side

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient()); // Use state to persist the client

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
