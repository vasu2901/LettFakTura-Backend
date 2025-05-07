const Product = require('../models/Product');

async function productRoutes(fastify, options) {
    // Get all products
    fastify.get('/products', async (request, reply) => {
        const products = await Product.findAll();
        reply.send(products);
    });

    // Update a product
    fastify.put('/products/:id', async (request, reply) => {
        const id = request.params.id;
        const data = request.body;

        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return reply.code(404).send({ message: 'Product not found' });
            }

            await product.update(data);
            reply.send(product);
        } catch (err) {
            reply.code(500).send({ error: 'Failed to update product' });
        }
    });

    fastify.post('/products', async (request, reply) => {
        try {
            const newProduct = await Product.create(request.body);
            reply.code(201).send(newProduct);
        } catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Failed to create product' });
        }
    });
}

module.exports = productRoutes;
