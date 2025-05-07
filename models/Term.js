const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Term = sequelize.define('Term', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'terms',
    timestamps: false
});

module.exports = Term;
