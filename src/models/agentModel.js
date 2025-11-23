import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
const agentModel = sequelize.define("agentModel",{
    agentId:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    agentImage:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    designation:{
        type:DataTypes.STRING
    },
    contactNumber:{
        type:DataTypes.STRING
    } 
});
export default agentModel;
