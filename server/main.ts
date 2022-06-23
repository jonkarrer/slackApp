import { serve } from "./deno_modules/deps.ts";
import Router from "./Router/index.ts";

async function handler(req: Request): Promise<Response> {
  const response = await new Router(req).init();
  return response;
  ///use this to pass the challnege from slack and start testing.
  // return await new Router(req).verify();
}

serve(handler);
