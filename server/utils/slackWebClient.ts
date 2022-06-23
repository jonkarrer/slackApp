import "https://deno.land/std@0.144.0/dotenv/load.ts";
import { WebClient } from "../deno_modules/deps.ts";

const Client = new WebClient(Deno.env.get("SLACK_BOT_TOKEN"));

export default Client;
