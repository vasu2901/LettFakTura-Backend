

# LettFakTura Backend

**LettFakTura** is a lightweight backend service for managing invoicing, products, and terms with multilingual support. Built using [Fastify](https://www.fastify.io/) and [Sequelize](https://sequelize.org/) ORM, this Node.js backend provides a set of RESTful APIs that connect to a PostgreSQL database.

## Features

* **Product Management** – Create, retrieve, and update product records.
* **Terms by Language** – Fetch legal/usage terms dynamically based on the selected language.
* **Simple Welcome Endpoint** – Basic health check or greeting endpoint.
* **Fastify + Sequelize** – High-performance API framework with robust ORM support.
* **CORS Enabled** – Configured to allow requests from all origins.

---

## Tech Stack

* **Node.js**
* **Fastify**
* **Sequelize ORM**
* **PostgreSQL**
* **Dotenv**
* **CORS**

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+)
* [PostgreSQL](https://www.postgresql.org/)
* npm (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vasu2901/LettFakTura-Backend.git
   cd LettFakTura-Backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with:

   ```env
   PGDATABASE=lettfaktura
   PGUSER=your_pg_user
   PGPASSWORD=your_pg_password
   PGHOST=localhost
   ```

4. **Start the server**:

   ```bash
   node index.js
   ```

   The server will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Welcome

* `GET /`
  Returns a simple greeting response.

### Products

* `GET /products`
  Fetch all products.

* `POST /products`
  Create a new product.
  **Body**:

  ```json
  {
    "article_no": "ART2001",
    "product_service": "Example Product",
    "in_price": 100,
    "price": 150,
    "unit": "pcs",
    "in_stock": 25,
    "description": "An example item"
  }
  ```

* `PUT /products/:id`
  Update an existing product by ID.

### Terms

* `GET /terms?lang=en`
  Fetch terms based on language (`en` or `sv`, etc.).

---

## Project Structure

```
├── index.js              # Entry point
├── db.js                 # Sequelize DB configuration
├── routes/
│   ├── product.ts        # Product-related routes
│   ├── welcome.js        # Welcome route
│   └── term.js           # Terms based on language
├── models/
│   ├── Product.js        #Product Schema
|   ├── Term.js           # Term Schema
└── .env                  # Environment variables (not committed)
```

---

This Server is currently deployed on Heroku at [Backend](https://lettfaktura-backend-8u3e.onrender.com)


---

