import agentModel from "./agentModel.js";
import apartmentModel from "./apartmentModel.js";
import reviewModel from "./reviewModel.js";

const models = {
    agentModel,
    apartmentModel,
    reviewModel
};
export default models;

apartmentModel.hasMany(reviewModel,{
    foreignKey:'apartmentIdF',
    as:'reviews'
});
reviewModel.belongsTo(apartmentModel,{
    foreignKey:'apartmentIdF',
    as:'apartment'
});

//CREATING AGENT ID IN APARTMENT MODEL
agentModel.hasMany(apartmentModel,{
    foreignKey:'agentIdF',
    as:'apartments'
});
apartmentModel.belongsTo(agentModel,{
    foreignKey:'agentIdF',
    as:'agent'
});

