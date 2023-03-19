import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import  { Media }  from "../src/media/entities/media.entity";
config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Media],
    migrations:['../src/migrations/*.ts'],
    synchronize: true,
    
 
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;