import fastify from "fastify";
import mongoose from "mongoose";

//Connect to DB
mongoose
  .connect("mongodb://localhost/mycargarage", { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err));

const server = fastify({ logger: true });
// // Declare a route
// server.get("/", async (request, reply) => {
//   return { hello: "world" };
// });

// // Run the server!
// const start = async () => {
//   try {
//     await server.listen(3000);
//     server.log.info(`server listening on ${server.server.address().port}`);
//   } catch (err) {
//     server.log.error(err);
//     process.exit(1);
//   }
// };
// start();