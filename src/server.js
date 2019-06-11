import fastify from "fastify";
import mongoose from "mongoose";

// Use fastify framework and instantiate it
const server = fastify({ logger: true });

// Connect to DB
mongoose
  .connect("mongodb://localhost/mycargarage", { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err));

export default server;
