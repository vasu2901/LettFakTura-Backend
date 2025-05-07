const Term = require('../models/Term');
async function termRoutes(fastify) {
    // Get all products
    fastify.get('/terms', async (request, reply) => {
        const lang = request.query.lang;

        if (!lang) {
            return reply.code(400).send({ error: 'Language is required as ?lang=en or ?lang=sv' });
        }

        try {
            const term = await Term.findOne({ where: { language: lang } });
            if (!term) {
                return reply.code(404).send({ error: 'Terms not found for this language' });
            }

            reply.send(term);
        } catch (err) {
            console.error(err);
            reply.code(500).send({ error: 'Server error' });
        }
    });
}

module.exports = termRoutes;
