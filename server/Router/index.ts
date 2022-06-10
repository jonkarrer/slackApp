import { IURL, ISlackEventAPI } from "../interfaces/Router";
import handleSlackEvent from "./slackEvents";

export default class Router {
  constructor(private request: Request) {}

  get url(): IURL {
    return new URL(this.request.url);
  }
  get contentType(): string | null {
    return this.request.headers.get("content-type");
  }
  get data() {
    return this.parseContent();
  }

  async parseContent(): Promise<ISlackEventAPI | undefined> {
    if (this.contentType === "application/json") {
      return await this.request.json();
    } else {
      return undefined;
    }
  }

  async route(pathname: string) {
    const payload = await this.data;

    if (payload === undefined) {
      return "Payload is undefinded";
    }

    if (pathname === "/slack/events") {
      handleSlackEvent(payload);
    }
  }

  async start() {
    const { pathname } = this.url;
    await this.route(pathname);
  }
}

// if (pathname === "/slack/events") {
//   const request = await req.json();

//   return new Response(request.challenge);
// }
