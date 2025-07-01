"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { RoutingItem } from "@/types/routing";
import { fetchRoutingData } from "@/lib/apiList";

interface RoutingContextType {
  routing: RoutingItem[];
  isLoading: boolean;
  error: string | null;
}

const RoutingContext = createContext<RoutingContextType>({
  routing: [],
  isLoading: true,
  error: null,
});

export const useRouting = () => useContext(RoutingContext);

export const RoutingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [routing, setRouting] = useState<RoutingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchRoutingData();
        setRouting(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return (
    <RoutingContext.Provider value={{ routing, isLoading, error }}>
      {children}
    </RoutingContext.Provider>
  );
};
