
import Image from "next/image";
import { SocialMedia } from "../../SocialMedia/SocialMedia";
import { ISocialMedia } from "@/types/page.interface";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export const Menu = ({
  socialMedia,
  handleClose,
  open
}: {
  socialMedia: ISocialMedia[];
  handleClose: any;
  open: boolean;
}) => {
  return (
    <div className={open ? "menu open" : "menu"}>
      <div className="menu_header">
        <Image src="/logo.svg" width={174.56} height={20} alt="Clevetura" />
        <div className="close" onClick={handleClose}>
          <Image src="/close.svg" width={20} height={20} alt="Clevetura" />
        </div>
      </div>
      <div className="menu_main">
        <div className="menu_wrap">
          <div className="menu_list_title">CLVX 1</div>
          <div className="menu_list_list">
            <ScrollLink
              className="menu_list_item"
              to="clvx1"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Meet the CLVX 1
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="type-and-touch"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Type and Touch
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="keyboard"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Keyboard
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="touch-RGB"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Touch RGB
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="application"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Application
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="design"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Design
            </ScrollLink>
          </div>
        </div>
        <div className="menu_wrap">
          <div className="menu_list_title">About us</div>
          <div className="menu_list_list">
            <ScrollLink
              className="menu_list_item"
              to="company"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Company
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="technology"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Technology
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="team"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Our Team
            </ScrollLink>
            <ScrollLink
              className="menu_list_item"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleClose}
            >
              Roadmap
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="menu_footer">
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
};
