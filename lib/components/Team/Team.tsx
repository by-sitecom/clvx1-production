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
    <div className="section">
      <div>{title && <div className="section__title">{title}</div>}</div>

      {content && (
        <div
          className="section__dscr"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
      {teamList.length > 0 && <TeamList teamList={teamList} />}
    </div>
  );
};
