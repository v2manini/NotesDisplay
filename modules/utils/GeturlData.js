const getMetaData = require('metadata-scraper');

async function geturldata(urls) { 
    let ArraAux = [];
    let Urldata ;
    let idNum = 0;

    for (let i = 0; i < urls.length; i++) {
        if (urls[i].endsWith("jpg")|| urls[i].endsWith("jpeg") || urls[i].endsWith("png") || urls[i].endsWith("webp") || urls[i].endsWith("gif")) {
            Urldata = await getMetaData(urls[i]);
            ArraAux.push(getObje(idNum,urls[i],"Imagen/Pintura","",Urldata.provider,"","Ninguna",urls[i])); // Urldata.provider usar el urls[i]
            idNum++;
        } else {
            Urldata = await getMetaData(urls[i]);
            //console.log(Urldata);           
           ArraAux.push(getObje(idNum,Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"","Ninguna",Urldata.image));
           idNum++;
        }
    }
    return ArraAux;
}

// async function getSubdata(urls,idNum) {  // para futuro
//     let = objx;
//     if (urls.endsWith("jpg")|| urls.endsWith("jpeg") || urls.endsWith("png") || urls.endsWith("webp") || urls.endsWith("gif")) {
//         Urldata = await getMetaData(urls[i]);
//         objx = getObje(idNum,urls,"Imagen/Pintura","",Urldata.provider,"","Ninguna",urls); // Urldata.provider usar el urls[i]
//     } else {
//         Urldata = await getMetaData(urls);
//         //console.log(Urldata);           
//         objx = getObje(idNum,Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"","Ninguna",Urldata.image);
//     }
//     idNum++;
//     return objx;
// }

function getObje(idNum,url,title,description,provider,Subtipo,limag,pimag) {
    Objs =  {
        id : idNum,
        url : url,
        nombre : title,
        descrip : description,
        tipo : provider,
        Subtipo: Subtipo,
        limag : limag,
        pimag : pimag
    };
    return Objs;
};

module.exports = {geturldata}