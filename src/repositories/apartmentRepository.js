import { Op } from "sequelize";
import models from "../models/index.js"
const agentModel = models.agentModel;
const apartmentModel = models.apartmentModel;
const reviewsModel = models.reviewModel;
export const getSingleApartmentByApartmentIdWithAgentAndAllReviews = async(apartmentId)=>{
    return await apartmentModel.findOne({
        where:{apartmentId:apartmentId},
        include:[
            {
                model:agentModel,
                as:'agent'
            },
            {
                model:reviewsModel,
                as:'reviews'
            }   
        ]
    });
};
export const getAllApartmentWithNameAndPrice = async()=>{
    return await apartmentModel.findAll(
        {
            attributes:['apartmentId','apartmentName','price'],
            include:[
                {
                    model:reviewsModel,
                    as:'reviews',
                    attributes:['rating']
                }
            ]
        }
    );
}
export const getAllApartmentsWithSearch = async(searchParam)=>{
      return await apartmentModel.findAll(
        {
            where :{
                apartmentName:{
                 [Op.like]:`%${searchParam}%`,
                }
            },
            attributes:['apartmentId','apartmentName','price'],
            include:[
                {
                    model:reviewsModel,
                    as:'reviews',
                    attributes:['rating']
                }
            ]
        }
    );
}