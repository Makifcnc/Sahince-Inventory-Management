"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#1a1a1a" : "#f9fafb",
        color: isDarkMode ? "#e5e7eb" : "#111827",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        transition: "background-color 0.3s, color 0.3s"
      }}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
        style={{
          backgroundColor: isDarkMode ? "#1a1a1a" : "#f9fafb",
          transition: "background-color 0.3s"
        }}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;