"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import logo from "@/public/logo.png";
import Image from "next/image";
import AuthDynamic from "./AuthDynamic";
import { siteConfig } from "@/config/site";

interface NavItem {
  label: string;
  href: string;
}

export const Navbar = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [navMenuItems, setNavMenuItems] = useState<NavItem[]>([]);

  useEffect(() => {
    // Assuming siteConfig is imported and doesn't require async fetching
    setNavItems(siteConfig.navItems);
    setNavMenuItems(siteConfig.navMenuItems);
  }, []);

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="dark:bg-slate-900 bg-primary"
    >
     

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <AuthDynamic />
      </NavbarContent>

    

      
    </NextUINavbar>
  );
};
