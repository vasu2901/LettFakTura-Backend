const Fastify = require('fastify');
const sequelize = require('./models');
require('dotenv').config();
const cors = require('@fastify/cors');

const fastify = Fastify({ logger: true });

fastify.register(require('./routes/product'));
fastify.register(require('./routes/welcome'));
fastify.register(require('./routes/term'))

const start = async () => {
    await fastify.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
      });
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
        await sequelize.sync();
        await fastify.listen({ port: 3000 });
        console.log('Server is running on port 3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
