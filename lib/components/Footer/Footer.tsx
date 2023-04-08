import { ISocialMedia } from "@/types/page.interface";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import Image from "next/image";

export const Footer = ({ socialMedia }: { socialMedia:ISocialMedia[]}) => {
  return (
    <div className="footer">
      <div className="logo">
        <Image src="/logo.svg" width={174.56} height={20} alt="Clevetura" />
      </div>
      <SocialMedia socialMedia={socialMedia} />
    </div>
  );
};
