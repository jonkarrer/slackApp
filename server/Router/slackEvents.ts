import { ISlackEventAPI } from "../interfaces/Router";

export default function handleSlackEvent(event: ISlackEventAPI) {
  const type = event.type;
}
