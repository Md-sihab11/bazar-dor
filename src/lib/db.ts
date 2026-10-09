import dns from "node:dns";

try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // ignore in non-node environments
}

import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URL!;

if (!uri) {
  throw new Error("MONGO_DB_URL is missing");
}

const client = new MongoClient(uri);

export default client;