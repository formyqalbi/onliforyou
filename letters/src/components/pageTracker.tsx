"use client";

import { createContext, useContext, useState } from "react";

type PageTracker = {
  current: number;
  setCurrent: (n: number) => void;
};

const PageTrackerContext = createContext<PageTracker | null>(null);

export function PageTrackerProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(1);
  return (
    <PageTrackerContext.Provider value={{ current, setCurrent }}>
      {children}
    </PageTrackerContext.Provider>
  );
}

export function usePageTracker() {
  const ctx = useContext(PageTrackerContext);
  if (!ctx) throw new Error("usePageTracker must be used within PageTrackerProvider");
  return ctx;
}
