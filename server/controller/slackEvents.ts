import { SlackEventAPI } from "../types/Router.ts";
import Client from "../utils/slackWebClient.ts";

export default async function handleSlackEvent(event: SlackEventAPI) {
  console.log("Event", event);
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    await Client.views.publish({
      /* the user that opened your app's app home */
      user_id: channelId,

      /* the view object that appears in the app home*/
      view: {
        type: "home",
        callback_id: "home_view",

        /* body of the view */
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "What Up :tada:",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app.",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Click me!",
                },
                action_id: "hello",
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(error);
  }
  return new Response("Slack Event Handled");
}

const channelId = "U02U8DH9F37";

// ! Sample from Bolt framework
// app.event("app_home_opened", async ({ event, Client, context }) => {
//   try {
//     /* view.publish is the method that your app uses to push a view to the Home tab */
//     const result = await Client.views.publish({
//       /* the user that opened your app's app home */
//       user_id: event.user,

//       /* the view object that appears in the app home*/
//       view: {
//         type: "home",
//         callback_id: "home_view",

//         /* body of the view */
//         blocks: [
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "*Welcome to your _App's Home_* :tada:",
//             },
//           },
//           {
//             type: "divider",
//           },
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app.",
//             },
//           },
//           {
//             type: "actions",
//             elements: [
//               {
//                 type: "button",
//                 text: {
//                   type: "plain_text",
//                   text: "Click me!",
//                 },
//                 action_id: "hello",
//               },
//             ],
//           },
//         ],
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });
