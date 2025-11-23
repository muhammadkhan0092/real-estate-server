import models from "../models"
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
export const getAllApartmentsWithLimitedColumn = async()=>{
    return await apartmentModel.findAll(
        {
            include:['apartmentId','image','apartmentName','price']
        }
    );
};