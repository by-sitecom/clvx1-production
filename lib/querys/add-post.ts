export const ADD_POST = `
		mutation {
  createPost(input: {
    title: "First title"
  }) {
    clientMutationId
  } 
}
`;
