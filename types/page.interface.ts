import { IImage } from "./image.interface";

export interface IPage {
  main: {
    properties_main: {
      mainVideo: IImage;
      mainTitle: string;
    };
  };
  clvx1: {
    properties_clvx1: {
      clvx1Title: string;
      clvx1Gallery: IImage[];
      clvx1List: IClvx1List[];
    };
  };
  typeTouch: {
    properties_typetouch: {
      typeTouchTitle: string;
      typeTouchDescription: string;
      typeTouchVideo: IImage;
      typeTouchBlock1: {
        block1InDevelopment: string;
        block1Title: string;
        block1Description: string;
      };
      typeTouchBlock2: {
        block2InDevelopment: string;
        block2Title: string;
        block2Description: string;
        videoLinkWindows: string;
        videoLinkLinux: string;
      };
      typeTouchBlock3: {
        block3InDevelopment: string;
        block3Title: string;
        block3AnchorVideo: string;
        block3VideoUrl: string;
      };
    };
  };
  keyboard: {
    properties_keyboard: {
      keyboardTitle: string;
      keyboardDescription: string;
      keyboardVideoUrl: string;
      keyboardAnchorVideo: string;
      keyboardImage: IImage;
    };
  };
  touchRgb: {
    properties_touch_rgb: {
      touchRgbTitle: string;
      touchRgbDescription: string;
      touchRgbYoutubeLink: string;
      touchRgbYoutubeLinkAnchor: string;
      touchRgbVideo: IImage;
      touchRgbVideoBg: IImage;
    };
  };
  brightnessControl: {
    properties_brightness: {
      brightnessTitle: string;
      brightnessDescription: string;
      brightnessImage: IImage;
    };
  };
  faq: {
    properties_faq: {
      faqTitle: string;
      faqDescription: string;
      faqQuestions: IFaq[];
    };
  };
  application: {
    properties_application: {
      applicationTitle: string;
      applicationInDevelopment: boolean;
      applicationDescription: string;
      applicationSettings: IApplicationSettings[];
      applicationSupport: IApplicationSupport[];
    };
  };
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
  featureItem: string;
}

export interface IDesignVideos {
  designVideoInDevelopment: boolean;
  designVideoAnchor: string;
  designVideoUrl: string;
}

export interface IApplicationSettings {
  applicationSettingsTitle: string;
  applicationSettingsImage: IImage;
  applicationSettingsDescription: IApplicationSettingsDescription[]
}

export interface IApplicationSettingsDescription {
  applicationSettingsDescriptionValue: string;
}

export interface IApplicationSupport {
  applicationSupportTitle: string;
  applicationSupportImage: IImage;
  applicationSupportDescription: IApplicationSupportDescription[]
};

export interface IApplicationSupportDescription {
  applicationSupportDescriptionValue: string;
}

export interface IFaq {
  faqQuestion:string
  faqAnswer:string
}

export interface IClvx1List{
  clvx1ListIcon: IImage;
  clvx1ListDescription: string;
}