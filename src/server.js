import models from "./models/index.js"
import sequelize from "./config/dbConfig.js";
import app from "./app.js";
import env from "./config/env.js";
import seed from "./seed/seedFunctions.js";
import { getAllApartmentWithNameAndPrice } from "./repositories/apartmentRepository.js";
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
        const result  = await getAllApartmentWithNameAndPrice();
        const mappedResult = result.map(item => {
    const ratings = item.reviews.map(r => r.rating);
    const avg = ratings.length ? ratings.reduce((accumulativeResult,currentRating) => accumulativeResult + currentRating, 0) / ratings.length : 0;
    return {
        apartmentId: item.apartmentId,
        apartmentName: item.apartmentName,
        price: item.price,
        averageRating: avg
    };
});

        console.log(JSON.stringify(mappedResult, null, 2));
    }
    catch(err){
        console.log(err);
    }
};
startServer();
