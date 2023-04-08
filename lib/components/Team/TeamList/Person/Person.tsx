import { ITeamPerson } from "@/types/page.interface";
import Image from "next/image";

export const Person = ({ photo, name, position }: { photo:string; name:string; position: string }) => {
  return (
    <div className="person">
      {photo && (
        <div className="person__photo">
          <Image
            src={photo}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      {name && <div className="person__name">{name}</div>}
      {position && <div className="person__position">{position}</div>}
    </div>
  );
};
