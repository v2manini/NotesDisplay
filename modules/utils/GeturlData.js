const getMetaData = require('metadata-scraper');

async function geturldata(urls) { 
    try {  
        let ArraAux = [];
        return ArraAux = getDataFromUrl(urls);
    } catch (error) {console.log("Error del geturldata ",error)};
};

async function getDataFromUrl(urls) {  // para futuro
    let ArraAux = [];
    let Urldata ;
    let idNum = 0;
    let objMetaScap;

    for (let i = 0; i < urls.length; i++) {
        if (!urls[i].startsWith("http")) return;

        objMetaScap = {
            url: urls[i],
            forceImageHttps: false, 
        };
    
        if (urls[i].endsWith("jpg")|| urls[i].endsWith("jpeg") || urls[i].endsWith("png") || urls[i].endsWith("webp") || urls[i].endsWith("gif")) {
            Urldata = await getMetaData(objMetaScap);
            ArraAux.push(getObje(idNum,urls[i],"Imagen/Pintura","",Urldata.provider,"","Ninguna",urls[i])); // Urldata.provider usar el urls[i]
            idNum++;
        } else {
            Urldata = await getMetaData(objMetaScap);
            //console.log(Urldata); 
            if (!Urldata.description) Urldata.description = "Ninguna"; 
           ArraAux.push(getObje(idNum,Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"","Ninguna",Urldata.image));
           idNum++;
        }
        console.log("Se completado el url num ",i+1)
    };
    console.log("\n");
    return ArraAux;
};

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