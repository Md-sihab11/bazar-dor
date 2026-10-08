import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URL!);
const db = client.db("ghorer-bazar");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_BASE_URL,
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

});