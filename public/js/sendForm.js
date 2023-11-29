function SearhData() {
    console.log("SearhData");
    let data = document.getElementById("id_links").value; 
    let nombre = document.getElementById("idnombdato").value; 

    //if () return Errorhandle("Falta Ingresar el archivo");
    if (nombre == "") return Errorhandle("Falta Ingresar un nombre");
    if (data == "") return Errorhandle("Falta Ingresar algun valor");

    document.getElementById("IdAddForm").submit();

}


