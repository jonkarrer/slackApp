import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import Router from "./Router/index.ts";

async function handler(req: Request): Promise<Response> {
  await new Router(req).route();
  ///use this to pass the challnege from slack and start testing.
  // return new Router(req).verify();

  return new Response("End Response");
}

serve(handler);
