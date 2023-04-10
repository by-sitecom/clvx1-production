"use client";
import Link from "next/link";
import { IMenuItem } from "@/types/menu.interface";
import { usePathname } from "next/navigation";

export const Menu = ({ menu }: { menu: IMenuItem[] }) => {
	const router = usePathname();
  return (
    <div className="">
      {menu.map((menuItem) =>
        menuItem ? (
          <Link
            key={menuItem.id}
            className={
              router === menuItem.slug
                ? "px-5 text-center font-serif text-h5 uppercase  leading-h5 text-red-100 transition duration-300 hover:text-opacity-70"
                : "px-5 text-center font-serif  text-h5 uppercase leading-h5 text-white transition duration-300 hover:text-opacity-70"
            }
            href={menuItem.slug}
          >
            {menuItem.name}
          </Link>
        ) : null
      )}
    </div>
  );
};
