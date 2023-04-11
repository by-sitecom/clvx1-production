"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";
import { Form} from "./Form.tsx/Form";

export const FooterPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const router = usePathname();

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

  const shadowStyle = shouldShowShadow ? "bg-gray-400" : "bg-gray-400";
  const hiddenStyle = shouldHideHeader ? "bottom-0" : "-bottom-full";

  return (
    <>
      <div className={`footerPopUp ${shadowStyle} ${hiddenStyle}`}>
        <div className="footerPopUp_title">
          Join waitlist for Kickstarter<br></br>to get CLVX 1 for $129
          <span>$149</span>
        </div>
        <div className="footerPopUp_btn" onClick={() => setIsOpen(true)}>
          Claim your 20% Off
        </div>
      </div>
      <Form open={isOpen} handleClose={togglePopup} />
    </>
  );
};
