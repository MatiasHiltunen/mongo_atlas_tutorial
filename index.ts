import express from "express";
import router from "./src/router.ts";
import { createMongoConnection } from "./database.ts";

await createMongoConnection()

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(express.urlencoded({ extended: true }))
app.use(router);



const port = process.env.PORT || 3000
app.listen(port);

console.log("Development server is running on: http://localhost:" + port)