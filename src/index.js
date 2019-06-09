import fastify from "fastify";
import mongoose from "mongoose";
import routes from "./routes/index";
import swaggerOptions from "./config/swagger";
import fastifySwagger from "fastify-swagger";

const server = fastify({ logger: true });

// Register swagger
server.register(fastifySwagger, swaggerOptions);

// Connect to DB
mongoose
  .connect("mongodb://localhost/mycargarage", { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err));

// Initialize routes
routes.forEach(r => {
  server.route(r);
});
// Declare a route
server.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    // http://localhost:3000/
    await server.listen(3000);
    server.swagger();
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
