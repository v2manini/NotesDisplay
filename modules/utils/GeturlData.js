const getMetaData = require('metadata-scraper');
const {GetYtInfo} = require("./Yt_api");

async function geturldata(urls) { 
    try {  
        let ArraAux = [];
        return ArraAux = getDataFromUrl(urls);
    } catch (error) {console.log("Error del geturldata ",error)};
};

async function getDataFromUrl(urls) {  // para futuro
    let ArraAux = [];
    let Urldata ;
    let objMetaScap;
    let objFinal;

    for (let i = 0; i < urls.length; i++) {
        if (!urls[i].startsWith("http")) return;

        objMetaScap = {
            url: urls[i],
            forceImageHttps: false, 
        };
        // Si el url es una imagen
        if (urls[i].endsWith("jpg")|| urls[i].endsWith("jpeg") || urls[i].endsWith("png") || urls[i].endsWith("webp") || urls[i].endsWith("gif")) {
            //Urldata = await getMetaData(objMetaScap);
            //objFinal = getObje(urls[i],"","Imaen/Pintura",Urldata.provider,"Ninguna",urls[i]); 
            objFinal = await getMetaDataMain(objMetaScap,"Fotos o pinturas",null,objMetaScap.url,"Imaen/Pintura");
            
        }else  if (urls[i].startsWith("https://youtu.be")|| urls[i].startsWith("https://www.youtube")) { // Si el url es de YT
            let ytData = await GetYtInfo(urls[i]);
            objFinal = getObje(ytData.url,ytData.title,ytData.description.slice(0,500),"YouTube","Ninguna",ytData.image);

        }else{
            // Urldata = await getMetaData(objMetaScap);
            // if (!Urldata.description) Urldata.description = "Ninguna"; 
            // objFinal = getObje(Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"Ninguna",Urldata.image);
            objFinal = await getMetaDataMain(objMetaScap)
        };

        
        ArraAux.push(objFinal);
        console.log("Se completado el url num ",i+1, " ",objFinal.url);
    };
    console.log("\n");
    return ArraAux;
};

async function getMetaDataMain(url,pDescription,pTitulo,ppimag,pprovider) { //pTitulo,pDescription
    let objFinal;
    try {

        let Urldata = await getMetaData(url);
        // if(pTitulo) Urldata.title = pTitulo;
        if(pDescription) Urldata.description = pDescription;
        if(ppimag) Urldata.image = ppimag;
        if(pprovider) Urldata.provider = pprovider;
        
        if (!Urldata.description) Urldata.description = "Ninguna"; 

        objFinal = getObje(Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"Ninguna",Urldata.image);

    } catch (error) {
        console.log("Error: ",error)
        objFinal = getObje(url.url,url.url,"Ninguna","","Ninguna","");
    }finally{
        return objFinal;
	}
};

function getObje(url,title,description,provider,limag,pimag) {
    Objs =  {
        url : url,
        nombre : title || url,
        descrip : description,
        tipo : provider,
        //Subtipo: Subtipo,
        limag : limag,
        pimag : pimag
    };
    return Objs;
};

module.exports = {geturldata}