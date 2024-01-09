//#region Set up
const express = require('express'); //Para el manejo del servidor Web
const exphbs = require('express-handlebars'); //Para el manejo de los HTML
const path = require("path");

const app = express();
const Listen_Port = process.env.PORT || 3000;

//Sets our app to use the handlebars engine
app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"


app.set("views", path.join(__dirname, "views"));
//app.set("views", "views");

app.engine(".hbs",exphbs.create({
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);

app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(express.json());


app.listen( Listen_Port, function () {
    console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

//#endregion

app.use(require('./Routers/x-Default'));
app.use(require('./Routers/AddLinks'));
app.use(require('./Routers/Viewlink'));
app.use(require('./Routers/ViewlinkDb'));
app.use(require('./Routers/eddit'));
app.use(require('./Routers/delete'));
app.use(require('./Routers/x-Errors'));



