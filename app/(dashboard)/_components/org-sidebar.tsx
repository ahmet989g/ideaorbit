"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image
            src="/logo.svg"
            width={60}
            height={60}
            alt="Logo"
          />
          <span className={cn("font-semibold text-2xl", font.className)}>Board</span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white"
            }
          }
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          asChild
          variant={favorites ? "outline" : "secondary"}
          size={"lg"}
          className="w-full font-normal justify-start px-2"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          variant={favorites ? "secondary" : "outline"}
          size={"lg"}
          className="w-full font-normal justify-start px-2"
        >
          <Link href={{
            pathname: "/",
            query: { favorites: "true" }
          }}>
            <Star className="h-4 w-4 mr-2" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
}