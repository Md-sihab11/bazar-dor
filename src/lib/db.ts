import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URL;

if (!uri) {
  throw new Error("MONGO_DB_URL is missing");
}

const client = new MongoClient(uri);

export default client;