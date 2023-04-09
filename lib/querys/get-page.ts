export const GET_PAGE = `
query {
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
