"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""
          }
      }`}
        style={{
          backgroundColor: isActive
            ? "#3b82f6"
            : isDarkMode ? "transparent" : "transparent",
          color: isActive
            ? "#ffffff"
            : isDarkMode ? "#e5e7eb" : "#374151"
        }}
      >
        <Icon className="w-6 h-6" style={{
          color: isActive
            ? "#ffffff"
            : isDarkMode ? "#e5e7eb" : "#374151"
        }} />

        <span
          className={`${isCollapsed ? "hidden" : "block"
            } font-medium`}
          style={{
            color: isActive
              ? "#ffffff"
              : isDarkMode ? "#e5e7eb" : "#374151"
          }}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div
      className={sidebarClassNames}
      style={{
        backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
        color: isDarkMode ? "#e5e7eb" : "#374151",
        transition: "background-color 0.3s, color 0.3s"
      }}
    >
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"
          }`}
      >
        {/* <Image
          src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png"
          alt="edstock-logo"
          width={27}
          height={27}
          className="rounded w-8"
        /> */}
        <h1
          className={`${isSidebarCollapsed ? "hidden" : "block"
            } font-extrabold text-2xl`}
        >
          ŞAHİNCE
        </h1>

        <button
          className="md:hidden px-3 py-3 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
          style={{
            backgroundColor: isDarkMode ? "#374151" : "#f3f4f6"
          }}
        >
          <Menu className="w-4 h-4" style={{
            color: isDarkMode ? "#e5e7eb" : "#374151"
          }} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs" style={{
          color: isDarkMode ? "#9ca3af" : "#6b7280"
        }}>&copy; 2025 Şahince</p>
      </div>
    </div>
  );
};

export default Sidebar;