export const GET_PAGE = `
query {
  team: page(id: "team", idType: URI) {
    title
    content
    properties_team {
      teamList {
        personName
        personPosition
        personImage {
          sourceUrl
        }
      }
    }
  }
  footer:page(id: "footer", idType: URI) {
    properties_footer {
      socialMedia {
        icon {
          sourceUrl
        }
        url
      }
    }
  }
}
`;
