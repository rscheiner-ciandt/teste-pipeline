import fp from "fastify-plugin";
import { HelloWorld } from '../../helloworld/helloworld';

export default fp(async (server, opts, next) => {
  server.route({
    url: "/helloworld",
    logLevel: "warn",
    method: ["GET", "HEAD"],
    handler: async (request, reply) => {
      return reply.send({ name: HelloWorld(), date: new Date() });
    }
  });
  next();
});
