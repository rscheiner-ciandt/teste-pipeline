import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import helloworldRoutes from "./routes/HelloWorld";

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({});

server.register(helloworldRoutes);

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
};

start();
