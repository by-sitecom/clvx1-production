export const GET_PAGE = `
query {
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
      roadmapTitle
      roadmapDescription
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
