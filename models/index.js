const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }

    
})