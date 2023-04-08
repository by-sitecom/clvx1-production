import { IImage } from "./image.interface";

export interface IPage {
  team: {
    title: string;
    content: string;
    properties_team: { 
      teamList: ITeamPerson[] 
    };
  };
  footer: {
    properties_footer: {
      socialMedia: ISocialMedia[];
    };
  };
}

export interface ITeamPerson {
  personName: string;
  personPosition: string;
  personImage: IImage;
}

export interface ISocialMedia {
  icon: IImage;
  url: string;
}
