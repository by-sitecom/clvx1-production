import { IImage } from "./image.interface";

export interface IPage {
  design: {
    properties_design: {
      designTitle: string;
      designDescription: string;
      designFeatures: IDesignFeature[];
      designGallery: IImage[];
      designVideos: IDesignVideos[];
      designFeaturesTitle: string;
    };
  };
  technology: {
    properties_technology: {
      technologyTitle: string;
      technologyDescription: string;
      technologyAnchorVideo: string;
      technologyVideoUrl: string;
      technologyImage: IImage;
    };
  };
  roadmap: {
    properties_roadmap: {
      roadmapTitle: string;
      roadmapDescription: string;
      roadmapGallery: IImage[];
      roadmap: IRoadMap[];
    };
  };
  specification: {
    properties_specification: {
      specificationTitle: string;
      specificationDescription: string;
      specificationGroup: ISpecificationGroup[];
    };
  };
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
  specificationItemName: string;
  specificationItemValue: string;
}

export interface IRoadMap {
  roadmapInProgress: boolean;
  roadmapDate: string;
  roadmapEvent: string;
  roadmapPhoto: IImage;
  roadmapVideo: string;
}

export interface IDesignFeature {
  featureItem:string
}

export interface IDesignVideos {
  designVideoInDevelopment: boolean;
  designVideoAnchor: string;
  designVideoUrl: string;
}