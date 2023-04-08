import { ISocialMedia } from "@/types/page.interface";
import { SocialMediaItem } from "./SocialMediaItem/SocialMediaItem";

export const SocialMedia = ({ socialMedia }: { socialMedia: ISocialMedia[] }) => {
  return (
    <div className="social_media">
      {socialMedia?.map((el, key) =>
        el ? (
          <SocialMediaItem key={key} icon={el.icon.sourceUrl} url={el.url} />
        ) : null
      )}
    </div>
  );
};
