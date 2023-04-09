import { IRoadMap } from "@/types/page.interface";

export const RoadMapItem = ({ roadMapItem }: { roadMapItem: IRoadMap }) => {
  return (
    <div className="roadMap_item">
      <div className="roadMap_date">{roadMapItem.roadmapDate}</div>
      <div className="roadMap_event">{roadMapItem.roadmapEvent}</div>
      {roadMapItem.roadmapVideo && <div className="roadMap_video"></div>}
      {roadMapItem.roadmapPhoto && <div className="roadMap_photo"></div>}
      {roadMapItem.roadmapInProgress ? (
        <div className="roadMap_progress in"></div>
      ) : (
        <div className="roadMap_progress"></div>
      )}
    </div>
  );
};
