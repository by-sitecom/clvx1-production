export const GET_PAGE = `
query {
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
      companyAwards {
        companyAwardImage {
          sourceUrl
          altText
        }
      }
      companyImage {
        sourceUrl
        altText
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
