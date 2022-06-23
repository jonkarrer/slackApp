import { SlackEventAPI, RequestData } from "../types/Router.ts";
import handleSlackEvent from "../controller/slackEvents.ts";
import handleSlackInteraction from "../controller/slackInteract.ts";
import handleSlackCommand from "../controller/slackCommand.ts";

export default class Router {
  pathname: string;
  requestData: RequestData | undefined;

  constructor(private req: Request) {
    this.pathname = new URL(req.url).pathname;
    this.requestData = undefined;
  }

  async init(): Promise<Response> {
    await this.parseRequestData();

    if (!this.requestData) {
      console.log("Request data not found");
      return new Response("Request data not found");
    } else {
      return this.route();
    }
  }

  async parseRequestData(): Promise<RequestData | undefined> {
    const contentType: string | null = this.req.headers.get("content-type");

    if (!contentType) {
      return undefined;
    }

    try {
      if (contentType === "application/json")
        this.requestData = await this.req.json();
      if (contentType === "application/x-www-form-urlencoded")
        this.requestData = await this.req.formData();
      if (contentType === "text/plain")
        this.requestData = await this.req.text();
    } catch (err) {
      console.log("parseDataFromRequest => Error:", err);
      return;
    }
  }

  route() {
    if (this.pathname === "/slack/events") {
      return handleSlackEvent(this.requestData as SlackEventAPI);
    } else if (this.pathname === "/slack/interact") {
      return handleSlackInteraction(this.requestData as FormData);
    } else if (this.pathname === "/slack/command") {
      return handleSlackCommand(this.requestData as FormData);
    } else {
      return new Response("Request URL unknown");
    }
  }

  //Will delete soon
  async verify() {
    await this.parseRequestData();
    //@ts-ignore: One off case
    console.log("Challenge", this.requestData?.challenge);
    //@ts-ignore: One off case
    return new Response(this.requestData?.challenge);
  }
}
