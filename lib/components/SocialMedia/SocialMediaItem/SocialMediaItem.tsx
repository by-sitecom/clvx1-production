import Link from "next/link";
import Image from "next/image";

export const SocialMediaItem = ({ icon, url }: { icon:string; url:string }) => {
  return (
    <Link className="item" href={url}>
      {icon && <Image src={icon} width={24} height={24} alt="social media" />}
    </Link>
  );
};
