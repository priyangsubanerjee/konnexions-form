import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH, {
  headers: {
    authorization: process.env.NEXT_PUBLIC_GRAPH_TOKEN,
  },
});

const addResponse = async (data) => {
  const formData = JSON.parse(data);

  const mutation = gql`
    mutation MyMutation {
      createResponse(
        data: {
          domain: "${formData.domain}"
          leadEmailId: "${formData.teamLeaderEmail}"
          leadName: "${formData.teamLeaderName}"
          leadRoll: "${formData.teamLeaderRoll}"
          member2Email: "${formData.member2Email}"
          member2Name: "${formData.member2Name}"
          member2Roll: "${formData.member2Roll}"
          member3Email: "${formData.member3Email}"
          member3Name: "${formData.member3Name}"
          member3Roll: "${formData.member3Roll}"
        }
      ) {
        id
      }
    }
  `;

  try {
    const { createResponse } = await client.request(mutation);
    console.log(createResponse);
    return {
      success: true,
      message: "Response added successfully",
      data: createResponse,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.response.errors[0].message,
      data: null,
    };
  }
};

export { addResponse };
