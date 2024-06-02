"use client";

import React, { useEffect, useState } from "react";
import type { DrawerProps } from "antd";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<DrawerProps["loading"]>(true);
  let id: NodeJS.Timer;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    clearTimeout(Number(id));
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (open) {
      id = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [open]);

  return (
    <section className="w-full max-x-[264px]">
      <Image
        src="/icons/hamburger.svg"
        width={36}
        height={36}
        alt="hamburger icon"
        className="cursor-pointer sm:hidden"
        onClick={showDrawer}
      />
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        loading={loading}
        afterOpenChange={(visible) => !visible && setLoading(true)}
        className="border-none bg-dark-1"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="Yoom logo"
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            Yoom
          </p>
        </Link>

        <div className="flex h-[(100vh-72px)] flex-col justify-between overflow-y-auto">
          <section className="flex flex-col h-full pt-16 g-6 text-black">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route ||
                pathname.startsWith(`${link.route}/`);

              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn(
                    "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                    {
                      "bg-blue-1": isActive,
                    }
                  )}
                >
                  <Image
                    src={link.imgUrl}
                    alt={link.label}
                    width={20}
                    height={20}
                  />
                  <p className="font-semibold">{link.label}</p>
                </Link>
              );
            })}
          </section>
        </div>
      </Drawer>
    </section>
  );
};

export default MobileNav;
