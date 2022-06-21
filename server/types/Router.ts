export type SlackEventAPI = {
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
  event_time: number;
  authorizations: [
    {
      enterprise_id: null;
      team_id: string;
      user_id: string;
      is_bot: boolean;
      is_enterprise_install: boolean;
    }
  ];
  is_ext_shared_channel: boolean;
};

export type SlackInteractAPI = {
  type: string;
  user: { id: string; username: string; name: string; team_id: string };
  api_app_id: string;
  token: string;
  container: { type: string; view_id: string };
  trigger_id: string;
  team: { id: string; domain: string };
  enterprise: null;
  is_enterprise_install: boolean;
  view: {
    id: string;
    team_id: string;
    type: string;
    blocks: [
      { type: string; block_id: string; text: Array<{}> },
      { type: string; block_id: string },
      { type: string; block_id: string; text: Array<{}> },
      { type: string; block_id: string; elements: Array<[]> }
    ];
    private_metadata: "";
    callback_id: string;
    state: { values: {} };
    hash: string;
    title: { type: string; text: "View Title"; emoji: boolean };
    clear_on_close: boolean;
    notify_on_close: boolean;
    close: null;
    submit: null;
    previous_view_id: null;
    root_view_id: string;
    app_id: string;
    external_id: "";
    app_installed_team_id: string;
    bot_id: string;
  };
  actions: [
    {
      action_id: string;
      block_id: string;
      text: { type: string; text: string; emoji: boolean };
      type: string;
      action_ts: string;
    }
  ];
};

export type RequestData = string | FormData | SlackEventAPI;
