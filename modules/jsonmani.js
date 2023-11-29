const fs = require("fs");

function writejson(data,name) {
    data = JSON.stringify(data);
    fs.writeFile(`./json/${name}.json`,data, function(err){
        if (err) {
            console.log(err);
        } else{
            console.log("El archivo ha sido escrito");
        }
    })
}
function overwritejson(data,name) {
    data = JSON.stringify(data);
    fs.writeFile(`./json/${name}`,data, function(err){
        if (err) {
            console.log(err);
        } else{
            console.log("El archivo ha sido Sobreescrito");
        }
    })
}

function readjson(filepath,cb) {
    fs.readFile(filepath, "utf8",function(err,fileData){
        if(err) return cb && cb(err);
        try {
            const object = fileData;
            return cb && cb(null,object);
        } catch (err) {
            return cb && cb(err);
        }
    });

    
}

module.exports = {writejson,readjson,overwritejson}