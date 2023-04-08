import { ITeamPerson } from "@/types/page.interface";
import { TeamList } from "./TeamList/TeamList";

export const Team = ({
  title,
  content,
  teamList,
}: {
  title: string;
  content: string;
  teamList: ITeamPerson[]
}) => {
  return (
    <div className="section bg-gray-200">
      {title && <h2 className="text-center">{title}</h2>}
      {content && (
        <div
          className="mb-5 text-center text-xs leading-xs text-gray-300"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
      {teamList.length > 0 && <TeamList teamList={teamList} />}
    </div>
  );
};
