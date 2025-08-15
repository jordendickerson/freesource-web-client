"use client";

import React from "react";
import Link from "next/link";

import { NavigationMenu } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import SearchBar from "./searchbar";
import ThemeToggle from "./toggles/toggle-theme";

export default function NavBar() {
  return (
    <NavigationMenu className="w-full px-0 py-2 hidden md:block">
      <div className="w-full grid grid-cols-4 items-center gap-4">
        {/* Left side */}
        <div className="flex items-center gap-4 justify-start mx-2">
          <Button variant="link" className="cursor-pointer">
            Home
          </Button>
          <Button variant="link" className="cursor-pointer">
            Categories
          </Button>
        </div>

        {/* Center */}
        <div className="flex justify-center col-span-2 w-full mx-2">
          <SearchBar />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 justify-end mx-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Button
            variant="secondary"
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer"
          >
            Sign In
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-slate-100 cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
    </NavigationMenu>
  );
}
