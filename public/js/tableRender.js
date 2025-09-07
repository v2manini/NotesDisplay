function tablefill(data,jsonfilename) { // Crea la tabla con los datos 
    let table = "";
    let jsonUrl = "";
    
    if (!document.getElementById("IdResult"))  return;
    if(jsonfilename) jsonUrl = `json/${jsonfilename}/`; 

    for (let i = 0; i < data.length; i++) {
        if (!data[i].pimag) data[i].pimag = data[i].limag; //Cambia la image a la local
        table += `
        <div class="dataconteiner" id="cuadro_${data[i].id}">
            <img id="id_img_${i}" loading="lazy" src= "${data[i].pimag}" alt="" srcset="" onerror="ImgLoadingError(${i})">
                <div class="subcontainer">
                    <h1><a target="_blank" href=${data[i].url}>${data[i].nombre}</a></h1>
                    <p>${data[i].descrip}</p>           
                    <h5>Tipo: ${data[i].tipo}</h5>
                    <h6>Subtipo: ${data[i].Subtipo}</h6>
                </div>
                <div class="btnContainer">
                    <a type="button" class="btn btn-warning margen" href="/edit/${jsonUrl}${data[i].id}">Editar</a>
                    <a type="button" onclick="deleteLink(${data[i].id})" class="btn btn-danger margen">Borrar</a>
                    <a type="button" onclick="quickEdit(${data[i].id})" class="btn btn-success margen">Edit sub</a>
                </div>
        </div>
        `;
    }
    document.getElementById("IdResult").innerHTML = table;
}