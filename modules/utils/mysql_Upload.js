const Mysql = require("../../modules/mysql");

async function mysql_Upload(data,nombre) {

    await data.forEach( async data => {
        await Mysql.Realizar_Query(`insert into NotesUrl (url, nombre, descrip, tipo, subtipo,limag,pimag) values ("${data.url}","${data.nombre}","${data.descrip}","${data.tipo}","${nombre}","${data.limag}","${data.pimag}");`);  
    });
};



module.exports = {mysql_Upload}