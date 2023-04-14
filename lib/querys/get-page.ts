export const GET_PAGE = `
query {
  main: page(id: "main", idType: URI) {
    properties_main {
      mainTitle
      mainVideo {
        altText
        sourceUrl
      }
    }
  }
  clvx1: page(id: "clvx1", idType: URI) {
    properties_clvx1 {
      clvx1Title
      clvx1Gallery {
        altText
        sourceUrl
      }
      clvx1List {
        clvx1ListIcon {
          sourceUrl
          altText
        }
        clvx1ListDescription
      }
    }
  }
  typeTouch: page(id: "type-touch", idType: URI) {
    properties_typetouch {
      typeTouchTitle
      typeTouchDescription
      typeTouchVideo {
        altText
        sourceUrl
      }
      typeTouchBlock1 {
        block1InDevelopment
        block1Title
        block1Description
      }
      typeTouchBlock2 {
        block2InDevelopment
        block2Title
        block2Description
        videoLinkWindows
        videoLinkLinux
      }
      typeTouchBlock3 {
        block3InDevelopment
        block3Title
        block3AnchorVideo
        block3VideoUrl
      }
    }
  }
  keyboard: page(id: "keyboard", idType: URI) {
    properties_keyboard {
      keyboardTitle
      keyboardDescription
      keyboardAnchorVideo
      keyboardVideoUrl
      keyboardImage {
        altText
        sourceUrl
      }
    }
  }
  touchRgb: page(id: "touch-rgb", idType: URI) {
    properties_touch_rgb {
      touchRgbTitle
      touchRgbDescription
      touchRgbYoutubeLink
      touchRgbYoutubeLinkAnchor
      touchRgbVideo {
        altText
        sourceUrl
      }
      touchRgbVideoBg {
        altText
        sourceUrl
      }
    }
  }
  brightnessControl: page(id: "brightness", idType: URI) {
    properties_brightness {
      brightnessTitle
      brightnessDescription
      brightnessImage {
        altText
        sourceUrl
      }
    }
  }
  faq: page(id: "faq", idType: URI) {
    properties_faq {
      faqTitle
      faqDescription
      faqQuestions {
        faqQuestion
        faqAnswer
      }
    }
  }
  application: page(id: "application", idType: URI) {
    properties_application {
      applicationTitle
      applicationInDevelopment
      applicationDescription
      applicationSettings {
        applicationSettingsTitle
        applicationSettingsImage {
          altText
          sourceUrl
        }
        applicationSettingsDescription {
          applicationSettingsDescriptionValue
        }
      }
      applicationSupport {
        applicationSupportTitle
        applicationSupportImage {
          altText
          sourceUrl
        }
        applicationSupportDescription {
          applicationSupportDescriptionValue
        }
      }
    }
  }
  design: page(id: "design", idType: URI) {
    properties_design {
      designTitle
      designDescription
      designFeatures {
        featureItem
      }
      designGallery {
        altText
        sourceUrl
      }
      designVideos {
        designVideoInDevelopment
        designVideoAnchor
        designVideoUrl
      }
      designFeaturesTitle
    }
  }
  technology: page(id: "technology", idType: URI) {
    properties_technology {
      technologyTitle
      technologyDescription
      technologyVideoUrl
      technologyAnchorVideo
      technologyImage {
        altText
        sourceUrl
      }
    }
  }
  roadmap: page(id: "roadmap", idType: URI) {
    properties_roadmap {
      roadmapDescription
      roadmapTitle
      roadmap {
        roadmapInProgress
        roadmapDate
        roadmapEvent
        roadmapPhoto {
          altText
          sourceUrl
        }
        roadmapVideo
      }
      roadmapGallery {
        sourceUrl
        altText
      }
    }
  }
  specification: page(id: "specification", idType: URI) {
    properties_specification {
      specificationTitle
      specificationDescription
      specificationGroup {
        specificationGroupTitle
        specificationItem {
          specificationItemName
          specificationItemValue
        }
      }
    }
  }
  company: page(id: "company", idType: URI) {
    properties_company {
      companyTitle
      companyDescription
      companyImage {
        sourceUrl
        altText
      }
      companyAwards {
        companyAwardImage {
          sourceUrl
          altText
        }
      }
    }
  }
  team: page(id: "team", idType: URI) {
    properties_team {
      teamTitle
      teamDescription
      teamList {
        personName
        personPosition
        personImage {
          sourceUrl
          altText
        }
      }
    }
  }
  footer:page(id: "footer", idType: URI) {
    properties_footer {
      socialMedia {
        icon {
          sourceUrl
          altText
        }
        url
      }
    }
  }
}
`;
