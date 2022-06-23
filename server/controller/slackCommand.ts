import Client from "../utils/slackWebClient.ts";

const channelId = "U02U8DH9F37";
const myId = "U02U8DH9F37";

// * /arhcitect will post a message in the app message panel with two buttons. Yay.
/* 
TODO Create functions that handle building the view based on which button the user clicks.
TODO Use the command's payload to view the action_id and route to the correct handle function.
*/

export default async function handleSlackCommand(command: FormData) {
  console.log(command.get("command"));
  console.log("RECENT COMMAND TABLE");
  console.table([...command]);

  try {
    // Call the chat.postEphemeral method using the WebClient
    // https://api.slack.com/methods/chat.postEphemeral
    await Client.chat.postEphemeral({
      channel: channelId,
      user: myId,
      // Starts the layout of the ephimeral.
      //Signifies which layout "blocks" to use.
      //this starts an actions block https://api.slack.com/reference/block-kit/blocks
      blocks: [
        {
          type: "actions",
          block_id: "actions1",
          // This starts the design of the blocks
          //https://api.slack.com/reference/block-kit/block-elements
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Create Project",
              },
              value: "project",
              action_id: "create_project",
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Create Task",
              },
              value: "task",
              action_id: "create_task",
            },
          ],
        },
      ],
      text: "Message",
    });
  } catch (error) {
    console.log(error);
    return new Response(error);
  }

  return new Response("Slack Command Handled");
}
