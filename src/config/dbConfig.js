import { Sequelize} from "sequelize";
import env from "./env.js";
console.log("DB NAME IS ",env.dbName);
console.log("DB USER IS ",env.dbUser);
console.log("DB PASS IS ",env.dbPass);
const sequelize = new Sequelize(
    env.dbName,
    env.dbUser,
    env.dbPass,
    {
        host:env.dbHost,
        dialect:'mysql',
        logging:false
    }
);
export default sequelize;