"use client";

import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <NextNavbar
      classNames={{
        base: "drop-shadow",
      }}
      isBlurred={true}
      shouldHideOnScroll={false}
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
    </NextNavbar>
  );
};

export default Navbar;
