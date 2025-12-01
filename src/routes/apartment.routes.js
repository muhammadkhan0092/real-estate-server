import { Router } from "express";
import safeCall from "../utils/safeCall.js";
import { getAllApartmentsBySearchParamController,getSingleApartmentController,getAllApartmentsController } from "../controllers/apartment.controller.js";
const apartmentRoutes = Router();
apartmentRoutes.get('/get',safeCall(getAllApartmentsController));
apartmentRoutes.get('/search',safeCall(getAllApartmentsBySearchParamController));
apartmentRoutes.get('/single',safeCall(getSingleApartmentController));
export default apartmentRoutes;