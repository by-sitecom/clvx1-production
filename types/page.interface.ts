import { IImage } from "./image.interface";

export interface IPage {
  company: {
    properties_company: {
      companyTitle: string;
      companyDescription: string;
      companyImage: IImage;
      companyAwards: ICompanyAwards[];
    };
  };
  team: {
    properties_team: {
      teamTitle: string;
      teamDescription: string;
      teamList: ITeamPerson[];
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

export interface ICompanyAwards {
  companyAwardImage: IImage;
}
