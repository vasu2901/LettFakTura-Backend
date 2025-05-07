const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
    article_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    product_service: {
        type: DataTypes.STRING,
        allowNull: true
    },
    in_price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    in_stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'products',
    timestamps: false // Set to true if you want createdAt/updatedAt
});

module.exports = Product;
