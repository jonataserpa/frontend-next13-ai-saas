"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaGithub } from 'react-icons/fa';

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
        <div className="relative h-8 w-6">
          <Image fill alt="Logo" src="/jhow-logo.png" />
        </div>
        </div>
        <h1 className={cn("text-2xl p-4 font-bold text-white", font.className)}>
          Dev
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <div className="flex flex-row items-center gap-6 mt-8 justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <Link href="https://github.com/jonataserpa" target="_blank" className="flex items-center">
              <FaGithub size={32} />
            </Link>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}