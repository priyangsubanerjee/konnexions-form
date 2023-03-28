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
          leadEmailId: "${formData.leaderEmail}"
          leadName: "${formData.leaderName}"
          leadRoll: "${formData.leaderRoll}"
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
    const message = error.response.errors[0].message;
    const member = message.match(/"(.*?)"/)[1];

    switch (member) {
      case "leadEmailId":
        return {
          success: false,
          message: "Leader already registered",
        };
      case "leadRoll":
        return {
          success: false,
          message: "Leader already registered",
        };
      case "member2Email":
        return {
          success: false,
          message: "Member 2 already registered",
        };
      case "member2Roll":
        return {
          success: false,
          message: "Member 2 already registered",
        };
      case "member3Email":
        return {
          success: false,
          message: "Member 3 already registered",
        };
      case "member3Roll":
        return {
          success: false,
          message: "Member 3 already registered",
        };
      default:
        return {
          success: false,
          message: "Something went wrong",
        };
    }
  }
};

export { addResponse };
