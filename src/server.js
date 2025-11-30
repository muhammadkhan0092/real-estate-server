import models from "./models/index.js"
import sequelize from "./config/dbConfig.js";
import app from "./app.js";
import env from "./config/env.js";
import seed from "./seed/seedFunctions.js";
import { getAllApartmentWithNameAndPrice } from "./repositories/apartmentRepository.js";
import { getSingleApartment,getAllApartments } from "./services/apartmentService.js";
async function startServer(params) {
    try{
        await sequelize.authenticate();
        console.log("DB CONNECTED");
        await sequelize.sync();
        console.log("DB SYNCED");
        app.listen(env.port,(err)=>{
            if(err) console.log("Server Starting Failed");
            else console.log("Server Started At Port ",env.port);
        });
        const mappedApartments = await getAllApartments();
    }
    catch(err){
        console.log(err);
    }
};
startServer();
