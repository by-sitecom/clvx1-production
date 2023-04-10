"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const router = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 0;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled(
    (callbackData: { previousScrollTop: any; currentScrollTop: any }) => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowShadow(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    }
  );

  const shadowStyle = shouldShowShadow ? "bg-black" : "bg-none";
  const hiddenStyle = shouldHideHeader ? "-top-full" : "top-0";

  return (
    <div>
      <div className={`header ${shadowStyle} ${hiddenStyle}`}>
          <Image src="/logo.svg" width={174.56} height={20} alt="Clevetura" />
          <Image src="/menu.svg" width={33.33} height={23.33} alt="Clevetura" />
      </div>
    </div>
  );
};
