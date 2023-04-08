import { ITeamPerson } from "@/types/page.interface";
import Image from "next/image";

export const Person = ({ photo, name, position }: { photo:string; name:string; position: string }) => {
  return (
    <div>
      {photo && (
        <div className="relative mb-4 aspect-[3/4]">
          <Image
            src={photo}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      {name && (
        <div className="mb-2 text-xs font-bold leading-xs text-white">
          {name}
        </div>
      )}
      {position && (
        <div className="text-xs leading-xs text-gray-300 mb-4">{position}</div>
      )}
    </div>
  );
};
