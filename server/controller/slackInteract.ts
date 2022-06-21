import { SlackInteractAPI } from "../types/Router.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";
import { WebClient } from "https://deno.land/x/slack_web_api@6.7.1/mod.js";

const client = new WebClient(Deno.env.get("SLACK_BOT_TOKEN"));

export default function handleSlackInteraction(interaction: FormData) {
  // Access the FormData API to get the payload
  const payload = interaction.get("payload");
  // Hanlde the case of null to shut typescript up
  if (!payload) {
    console.log("Payload is null");
    return;
  }
  //Convert the string of data to json format
  const jsonData: SlackInteractAPI = JSON.parse(payload.toString());
  console.log("INTERACTION", jsonData);

  return new Response("Slack Interaction Handled");
}
