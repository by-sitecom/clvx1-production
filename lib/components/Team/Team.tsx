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
    <div className="p-6">
      {/*title && <h3 className="text-center">{title}</h3>*/}
      {/*content && (
        <div
          className="mb-5 text-center text-gray-300"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )*/}
      {teamList.length > 0 && <TeamList teamList={teamList} />}
    </div>
  );
};
