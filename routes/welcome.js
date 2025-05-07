
async function welcomeRoutes(fastify) {
    // Get all products
    fastify.get('/', async (request, reply) => {
        reply.send("Hello.");
    });
}

module.exports = welcomeRoutes;
