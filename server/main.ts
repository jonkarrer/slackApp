import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";
import { WebClient } from "https://deno.land/x/slack_web_api@6.7.1/mod.js";

import Router from "./Router/index.ts";

// const client = new WebClient(Deno.env.get("SLACK_BOT_TOKEN"));

// const channelId = "U02U8DH9F37";

// try {
//   /* view.publish is the method that your app uses to push a view to the Home tab */
//   await client.views.publish({
//     /* the user that opened your app's app home */
//     user_id: channelId,

//     /* the view object that appears in the app home*/
//     view: {
//       type: "home",
//       callback_id: "home_view",

//       /* body of the view */
//       blocks: [
//         {
//           type: "section",
//           text: {
//             type: "mrkdwn",
//             text: "*Welcome to your _App's Home_* :tada:",
//           },
//         },
//         {
//           type: "divider",
//         },
//         {
//           type: "section",
//           text: {
//             type: "mrkdwn",
//             text: "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app.",
//           },
//         },
//         {
//           type: "actions",
//           elements: [
//             {
//               type: "button",
//               text: {
//                 type: "plain_text",
//                 text: "Click me!",
//               },
//               action_id: "hello",
//             },
//           ],
//         },
//       ],
//     },
//   });
// } catch (error) {
//   console.error(error);
// }

async function handler(req: Request): Promise<Response> {
  const Route = new Router(req);

  console.log("Headers", await Route.data);

  // if (Route.pathname === "/api/create-short-task") {
  //   const formData = await req.formData();

  //   const text = formData.get("text");

  //   console.log(text);

  //   return new Response("Short Task Created");
  // } else {
  //   return new Response("Unknown");
  // }
  return new Response("Unknown");
}

serve(handler);

// Example post request
const FormData = {
  [Symbol("entry list")]: [
    { name: "token", value: "wEo4jkCSMdWPQuffcYZ1r8eZ" },
    { name: "team_id", value: "TN11JKWSW" },
    { name: "team_domain", value: "protect247" },
    { name: "channel_id", value: "D02V1368QQG" },
    { name: "channel_name", value: "directmessage" },
    { name: "user_id", value: "U02U8DH9F37" },
    { name: "user_name", value: "jkarrer" },
    { name: "command", value: "/create-short-task" },
    { name: "text", value: '@peter "Task name is" "Do this now"' },
    { name: "api_app_id", value: "A03HR3PQWTF" },
    { name: "is_enterprise_install", value: "false" },
    {
      name: "response_url",
      value:
        "https://hooks.slack.com/commands/TN11JKWSW/3631258046565/ewLkbCGpX3xSGOEhBnlVkxw7",
    },
    {
      name: "trigger_id",
      value: "3646814859937.749052676914.4b9dc789246c79bd4ccb1958237b8ab5",
    },
  ],
  [Symbol("[[webidl.brand]]")]: Symbol("[[webidl.brand]]"),
};

// app.event("app_home_opened", async ({ event, client, context }) => {
//   try {
//     /* view.publish is the method that your app uses to push a view to the Home tab */
//     const result = await client.views.publish({
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
