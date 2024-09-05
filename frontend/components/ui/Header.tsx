import React from "react";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl">SCMS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href={"/"}>
            <Button variant="ghost">Home</Button>
          </Link>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="ghost">Help Center</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={"/login"}>
            <Button variant="outline">Login</Button>
          </Link>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
