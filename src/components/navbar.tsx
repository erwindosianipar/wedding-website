"use client";

import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [params]);

  return (
    <NextNavbar
      classNames={{
        base: "drop-shadow",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link className="flex gap-2 items-center" href="#main">
          <div className="font-bold text-3xl">
            {process.env.NEXT_PUBLIC_LHS_NICK_NAME}
          </div>
          <div className="text-xl">&</div>
          <div className="font-bold text-3xl">
            {process.env.NEXT_PUBLIC_RHS_NICK_NAME}
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="max-md:hidden font-serif" justify="end">
        <NavbarItem>
          <Link href="#akad">Akad & Resepsi</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#support">Hadiah Pernikahan</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#rsvp">Ucapan & RSVP</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden max-md:flex" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="font-mono">
        <NavbarMenuItem className="pt-2 pb-2">
          <Link href="#akad">Akad & Resepsi</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-2 pb-2">
          <Link href="#support">Hadiah Pernikahan</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-2 pb-2">
          <Link href="#rsvp">Ucapan & RSVP</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;
