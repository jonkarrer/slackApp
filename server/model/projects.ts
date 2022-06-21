import { config } from "https://deno.land/x/dotenv/mod.ts";
const { DB_KEY, APP_ID } = config();

interface IRequestOptions {
  method: string;
  headers: {
    "Content-Type": string;
    "Access-Control-Request-Headers": string;
    "api-key": string;
  };
  body: string;
}

class DatabaseController {
  DATA_SOURCE = "SlackCluster";
  DATABASE = "projects_db";
  COLLECTION = "projects";
  BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1/action`;

  DATA = {
    collection: this.COLLECTION,
    database: this.DATABASE,
    dataSource: this.DATA_SOURCE,
  };

  OPTIONS: IRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": DB_KEY,
    },
    body: "",
  };

  async insertProject(name: string, goal: string) {
    const insertData = {
      ...this.DATA,
      document: {
        name: name,
        goal: goal,
      },
    };

    this.OPTIONS.body = JSON.stringify(insertData);

    try {
      const request = await fetch(`${this.BASE_URI}/insertOne`, this.OPTIONS);

      const response = await request.json();

      console.log("DB Response", response);
    } catch (err) {
      console.log("DB Error", err);
    }
  }

  async deleteProject(name: string) {
    const deleteData = {
      ...this.DATA,
      filter: {
        name: name,
      },
    };

    this.OPTIONS.body = JSON.stringify(deleteData);

    try {
      const request = await fetch(`${this.BASE_URI}/deleteOne`, this.OPTIONS);

      const response = await request.json();

      console.log("DB Response", response);
    } catch (err) {
      console.log("DB Error", err);
    }
  }
}

const Database = new DatabaseController();

// Database.insertProject("myThirdProject", "Create a task app");
// Database.deleteProject("myThirdProject");
