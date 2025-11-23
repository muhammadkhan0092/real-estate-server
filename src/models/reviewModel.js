import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
const reviewModel = sequelize.define("reviewModel",{
    reviewId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    reviewText:{
        type:DataTypes.STRING
    },
    rating:{
        type:DataTypes.FLOAT
    }
});
export default reviewModel;