import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
const userModel = sequelize.define("userModel",{
    userId:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    avatar:{
        type:DataTypes.STRING
    }
});
export default userModel;
