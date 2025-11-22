import { Sequelize} from "sequelize";
import env from "./env.js";
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