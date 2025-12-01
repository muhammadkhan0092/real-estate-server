import { getAllApartments, getSingleApartment,getSearchedApartments } from "../services/apartmentService.js"

export const getAllApartmentsController = async(req,res)=>{
    const result = await getAllApartments()
    return res.status(200).json(result);
};
export const getAllApartmentsBySearchParamController = async(req,res)=>{
    const result = await getSearchedApartments();
    return res.status(200).json(result);
};
export const getSingleApartmentController = async(req,res)=>{
    const result = await getSingleApartment()
    return res.status(200).json(result);
};