import mongoose, {mongo} from "mongoose";

export const connect = async (
    user: string,
    pass: string,
    host: string,
    port: string,
    dbName: string
    ) => {
        try{
           await mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${dbName}?authSource=admin`);
           console.log("database connected");
        } catch (e) {
            console.log(e);
        }
    };