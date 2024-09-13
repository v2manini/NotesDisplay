const Mysql = require("../../modules/mysql");
let {ParseQuery} = require("../../modules/utils/parseSql");

async function mysql_Upload(data,nombre) {
    if (!data) return; 
    await data.forEach( async data => {
        await Mysql.Realizar_Query(`insert into NotesUrl (url, nombre, descrip, tipo, subtipo,limag,pimag) values 
        (?,?,?,?,?,?,?);`,[data.url,data.nombre,data.descrip,data.tipo,nombre,data.limag,data.pimag]);  
    });
};

//Falta parcear el nombre

module.exports = {mysql_Upload}