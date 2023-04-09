import { IImage } from "./image.interface";

export interface IPage {
  specification: {
    properties_specification: {
      specificationTitle: string
      specificationDescription: string
      specificationGroup: ISpecificationGroup[]
    }
  }
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

export interface ISpecificationGroup {
  specificationGroupTitle: string;
  specificationItem: ISpecificationItem[];
}

export interface ISpecificationItem {
  specificationItemName: string
  specificationItemValue: string
}
