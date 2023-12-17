// importamos express
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
//import ejs from "ejs"; // importamos ejs es como un html pero con js

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); // obtiene la ruta absoluta

app.set("views", join(__dirname, "views")); // seteamos la ruta de las plantillas
app.set("view engine", "ejs"); // seteamos el motor de plantillas

app.use(indexRouter); // usamos el router index
app.use(express.static(join(__dirname, "public")));// seteamos la carpeta publica : 

app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
