/*  globals process */

import server from "./server";
import routes from "./routes/index";
import swaggerOptions from "./config/swagger";
import fastifySwagger from "fastify-swagger";

// *******************
// Dont forget to start mongod!!!
// *******************

// Register swagger
server.register(fastifySwagger, swaggerOptions);

// Initialize routes
routes.forEach(r => {
  server.route(r);
});

// Run the server!
const start = async () => {
  try {
    await server.listen(3000, "0.0.0.0");
    server.swagger();
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
