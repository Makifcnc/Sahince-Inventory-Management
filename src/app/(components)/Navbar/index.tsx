"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div
      className="flex justify-between items-center w-full mb-7"
      style={{
        color: isDarkMode ? "#e5e7eb" : "#374151",
        transition: "color 0.3s"
      }}
    >
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 rounded-full hover:bg-blue-100 transition-colors"
          onClick={toggleSidebar}
          style={{
            backgroundColor: isDarkMode ? "#374151" : "#f3f4f6",
            color: isDarkMode ? "#e5e7eb" : "#374151"
          }}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            style={{
              backgroundColor: isDarkMode ? "#374151" : "#ffffff",
              borderColor: isDarkMode ? "#4b5563" : "#d1d5db",
              color: isDarkMode ? "#e5e7eb" : "#374151"
            }}
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Bell className="text-gray-500" size={20} style={{
              color: isDarkMode ? "#9ca3af" : "#6b7280"
            }} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              style={{
                backgroundColor: isDarkMode ? "#374151" : "#f3f4f6"
              }}
            >
              {isDarkMode ? (
                <Sun className="cursor-pointer" size={24} style={{ color: "#fbbf24" }} />
              ) : (
                <Moon className="cursor-pointer" size={24} style={{ color: "#6b7280" }} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer" size={24} style={{
              color: isDarkMode ? "#9ca3af" : "#6b7280"
            }} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l mx-3" style={{
            borderColor: isDarkMode ? "#4b5563" : "#d1d5db"
          }} />
          <div className="flex items-center gap-3 cursor-pointer">
            {/* <Image
              src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full h-full object-cover"
            /> */}
            <span className="font-semibold" style={{
              color: isDarkMode ? "#e5e7eb" : "#374151"
            }}>ŞAHİNCE ADMİN</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer" size={24} style={{
            color: isDarkMode ? "#9ca3af" : "#6b7280"
          }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;