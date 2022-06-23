import { RequestData } from "../types/Router.ts";

async function parseRequestData(
  req: Request
): Promise<RequestData | undefined> {
  const contentType: string | null = req.headers.get("content-type");

  if (!contentType) {
    return undefined;
  }

  let requestData;

  try {
    if (contentType === "application/json") requestData = await req.json();
    if (contentType === "application/x-www-form-urlencoded")
      requestData = await req.formData();
    if (contentType === "text/plain") requestData = await req.text();
  } catch (err) {
    console.log("parseDataFromRequest => Error:", err);
    return;
  }

  return requestData;
}

export default parseRequestData;
