import { SlackInteractAPI } from "../types/Router.ts";
import Client from "../utils/slackWebClient.ts";

export default function handleSlackInteraction(interaction: FormData) {
  // Access the FormData API to get the payload
  const payload = interaction.get("payload");
  // Hanlde the case of null to shut typescript up
  if (!payload) {
    console.log("Payload is null");
    return new Response("Payload is null");
  }
  //Convert the string of data to json format
  const jsonData: SlackInteractAPI = JSON.parse(payload.toString());
  console.log("INTERACTION", jsonData);

  return new Response("Slack Interaction Handled");
}
