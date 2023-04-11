export const ADD_USER = `
mutation RegisterUser($input: RegisterUserInput!) {
  registerUser(input: $input) {
    user {
      jwtAuthToken
      jwtRefreshToken
      isRestricted
      id
    }
  }
}
`;
