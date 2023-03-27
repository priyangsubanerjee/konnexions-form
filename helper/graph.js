import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH, {
  headers: {
    authorization: process.env.NEXT_PUBLIC_GRAPH_TOKEN,
  },
});

const addResponse = async (formData) => {
  const mutation = gql`
    mutation MyMutation {
      createResponse(
        data: {
          domain: "${formData.domain}"
          leadEmailId: "${formData.leadEmailId}"
          leadName: "${formData.leadName}"
          leadRoll: "${formData.leadRollNumber}"
          member2Email: "${formData.member2Email}"
          member2Name: "${formData.member2Name}"
          member3Email: "${formData.member3Email}}"
          member3Name: "${formData.member3Name}}"
          member3Roll: "${formData.member3Roll}"
          member2Roll: "${formData.member2Roll}"
        }
      ) {
        id
      }
    }
  `;

  try {
    const data = await client.request(mutation);
    return {
      success: true,
      message: "Response added successfully",
      data: data.createResponse,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response.errors[0].message,
      data: null,
    };
  }
};

export { addResponse };
