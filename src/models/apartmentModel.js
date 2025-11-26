import { DataTypes } from "sequelize";
import constants from "../utils/constants.js";
import sequelize from "../config/dbConfig.js";
const apartmentModel = sequelize.define("apartmentModel",{
    apartmentId:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    apartmentName:{
        type:DataTypes.STRING
    },
    overview:{
        type:DataTypes.STRING,
        images:DataTypes.ARRAY
    },
    price:{
        type:DataTypes.INTEGER
    },
    bedRooms:{
        type:DataTypes.INTEGER
    },
    bathRooms:{
        type:DataTypes.INTEGER
    },
    bedRooms:{
        type:DataTypes.INTEGER
    },
    facilities:{
        type:DataTypes.ENUM(
            constants.carParking,
            constants.swimming,
            constants.gymAndFitness,
            constants.restraunt,
            constants.wifiAndNetwork,
            constants.petCenter,
            constants.sportsCenter,
            constants.laundry
        )
    },
    image:{
        type:DataTypes.TEXT,
    },
    galleryImages:{
        type:DataTypes.JSON,
        defaultValue:[]   
    }
});
export default apartmentModel;
