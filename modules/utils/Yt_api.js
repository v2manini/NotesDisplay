require("dotenv").config(); // Asegurar token

async function GetYtInfo(url){
    let objaux;
    let res; 

    let idurl = youtube_parser(url);

    res =  await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.YT_API}&id=${idurl}&part=snippet`);
    res = await res.json();

    objaux  =  {
        url : url,
        title : res.items[0].snippet.title || url,
        description : res.items[0].snippet.description,
        image : res.items[0].snippet.thumbnails.high.url,
    };

    return objaux; 
};

function youtube_parser(url){ //https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url 
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

module.exports = {GetYtInfo}