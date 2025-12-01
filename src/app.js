import express from "express"
import {apartmentRoutes} from "./routes/routes.js"
const app = express();
app.use(express.json());
app.use('/apartment',apartmentRoutes);

export default app;