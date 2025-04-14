
import mongoose from "mongoose"
import type { ConnectOptions } from "mongoose"

const mongoAccount = process.env.MONGO_ATLAS_DB_USER
const mongoPassword = process.env.MONGO_ATLAS_PASSWORD

const uri = `mongodb+srv://${mongoAccount}:${mongoPassword}@cc.o3fcphg.mongodb.net/?appName=cc`;

const clientOptions  = { serverApi: { version: '1', strict: true, deprecationErrors: true } } as ConnectOptions;

export async function createMongoConnection(){
  try {

    const connection = await mongoose.connect(uri, clientOptions);
    
    return connection
    
  } catch(err) {

    console.log("Connection to Mongo database failed due to reason: ", err)
    await mongoose.disconnect();
  }
}