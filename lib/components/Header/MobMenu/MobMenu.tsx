"use client";
import Image from "next/image";
import { SocialNetworks } from "../../SocialNetworks/SocialNetworks";
import Link from "next/link";
import { IMenuItem } from "@/types/menu.interface";
import { Phone } from "../../Phone/Phone";
import { usePathname } from "next/navigation";

export const MobMenu = ({
  menu,
  handleClose,
  phone,
  open,
}: {
  menu: IMenuItem[];
  handleClose: any;
  phone: string;
  open: boolean;
}) => {
  const router = usePathname();

  return (
    <div
      className={
        open
          ? "opacity-1 fixed top-0 left-0 z-50 flex h-full w-full flex-col justify-between bg-black transition-all duration-300 ease-linear xl:hidden"
          : "fixed top-0 left-0 -z-50 flex h-full w-full flex-col justify-between bg-black opacity-0 transition-all duration-300 ease-linear xl:hidden"
      }
    >
      <div className="flex items-center justify-between border-b-1 border-solid border-white border-opacity-20 px-5 py-3 xxl:container md:px-8 xl:px-11">
        <div className="relative h-10 w-17 lg:h-14 lg:w-20">
          <Link href="/">
            <Image src="/logo.svg" alt="BIG BIKES 4 BIG BOYS" fill />
          </Link>
        </div>
        <div className="flex">
          <div
            className="flex h-8 w-7 cursor-pointer items-center justify-center"
            onClick={handleClose}
          >
            <Image
              className="cursor-pointer"
              src="./close.svg"
              height={20}
              alt="close"
              width={20}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t-1 border-solid border-white border-opacity-20">
        {menu.map((menuItem) =>
          menuItem ? (
            <Link
              key={menuItem.id}
              className="border-b-1 border-solid border-white border-opacity-20 p-4 text-center text-h4 font-bold uppercase  leading-h4 text-white"
              href={menuItem.slug}
              onClick={`${menuItem.slug}` == router ? handleClose : ""}
            >
              {menuItem.name}
            </Link>
          ) : null
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="mb-4">
          <Phone phone={phone} />
        </div>
        <SocialNetworks />
      </div>
    </div>
  );
};
