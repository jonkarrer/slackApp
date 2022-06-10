export interface IURL {
  href: string;
  origin: string;
  protocol: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  hash: string;
  search: string;
}

export interface ISlackEventAPI {
  token: string;
  team_id: string;
  api_app_id: string;
  event: {
    type: string;
    user: string;
    channel: string;
    tab: string;
    event_ts: string;
  };
  type: string;
  event_id: string;
  event_time: 1654803192;
  authorizations: [
    {
      enterprise_id: null;
      team_id: string;
      user_id: string;
      is_bot: true;
      is_enterprise_install: false;
    }
  ];
  is_ext_shared_channel: false;
}
