function ImgLoadingError(i) {
    let elemName = "id_img_"+i;
    const imagErrorUrl = "/img/img_failed.png";

    document.getElementById(elemName).src = imagErrorUrl;
} 