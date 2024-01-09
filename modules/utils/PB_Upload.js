const {pb} = require("../../modules/poket-base");

async function PB_upload(data,nombre) {
    pb.autoCancellation(false);
    let datos;
    await data.forEach( async data => {
        datos = {
            "url": data.url,
            "nombre": data.nombre,
            "descrip": data.descrip,
            "tipo": data.tipo,
            "subtipo": nombre,
            "pimag": data.pimag,
        };
        // console.log(datos);
        await pb.collection('NotesUrl').create(datos);
    });
};

module.exports = {PB_upload}