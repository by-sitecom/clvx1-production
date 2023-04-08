export const SEND_EMAIL = `
		mutation SendEmail($input: SendEmailInput!) {
				sendEmail(input: $input) {
						message
						origin
						sent
				}
		}
`;
