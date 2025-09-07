require("dotenv").config(); // Asegurar token

async function GetYtInfo(url){
    let objaux;
    let res; 
    let title,descrip,imag;

    try {
        
    if (url.includes("@")) {
        title = "Canal de " + url.split('@')[1];
        descrip = "";
        imag ="";

    } else {
        let idurl = youtube_parser(url);

        res =  await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.YT_API}&id=${idurl}&part=snippet`);
        res = await res.json();
        
        title   = res.items[0].snippet.title;
        descrip = res.items[0].snippet.description;
        imag   = res.items[0].snippet.thumbnails.high.url;
    }

    } catch (error) {
        console.error(error);
        console.log("Info :",res.items[0].snippet.title,res.items[0].snippet.description,res.items[0].snippet.thumbnails.high.url);
    } finally {

        objaux  =  {
            url : url,
            title : title || url,
            description : descrip || "Ninguna" ,
            image : imag ||  "" ,
        };

        return objaux; 
    };
};

function youtube_parser(url){ //https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url 
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

module.exports = {GetYtInfo}