# Cloud Databases - Mongo Atlas Example

Example repository for Cloud Computing module 6 

## Getting Started

1. Login to mongo Atlas: https://www.mongodb.com/products/platform/atlas-database

2. Create a new project and _free_ cluster into it:

![alt text](images/atlas_cluster_free.png)

3. For development purposes we leave out IP restriction by explicitly allowing connections from all IP addresses

![alt text](images/atlas_cluster_security.png)

![atlas_cluster_security_allow_all](images/atlas_cluster_security_allow_all.png)


4. Create Database user

![alt text](images/atlas_cluster_security_quickstart.png)

5. Create new connection
- Overview -> Project selection -> Create connection
- In this example we'll use nodejs as the base app and for that reason we choose mongoose as a driver. For a python application you should choose the python alternative. 
- This step is only to make it easy for the developer to get nice example with different technologies how to get started. Basically for us it would be enough to know the database user, password and mongo atlas project url and we can craft the connection URL based on those.

![alt text](images/atlas_create_mongoose_connection_nodejs.png)


6. Connect from application:

_`Nodejs v22.14.0` or newer is required to run this code_

**6.1.** Create .env file with variables for the database using the `management` credentials


_.env_
```
MONGO_ATLAS_PASSWORD=password...
MONGO_ATLAS_DB_USER=db_username...
```

**6.2.** 

No changes are needed here, this code is used to export a function that opens database connection from the backend server to the database.

_database.ts_

```ts
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
```

**6.3.**

- Install required dependencies with `npm install` command 
- Start the application in development environment by running `npm run dev` command.