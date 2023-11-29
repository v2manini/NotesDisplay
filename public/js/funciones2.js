const optionsDefaul = "Datos para elegir";
var DataJsonGloabla;

window.addEventListener('load', function(){
    let selec = this.document.getElementById("Idselec");
    if (selec) {
                ajaxPost("/getjson", null, function(data){
                    data = JSON.parse(data);
                    //console.log(data);
                    selecfill(data,selec);      
                });
    }
});

function selecAct() { //Selecciona el json que se quiera leer
    let selec = document.getElementById("Idselec").value;
    if(selec == optionsDefaul) return;
    //console.log(selec);
    ajaxPost("/getdata", {selec}, function(data){ 
        data = JSON.parse(data);
        //console.log(data);
        DataJsonGloabla = data;
        //console.log(data)
        tablefill(data,selec);      
    });
    console.log(document.getElementsByClassName("dataconteiner"))

}

function selecfill(data,selec) { // Muestra todos los archivos json en el selector
    let fill = `<option selected>${optionsDefaul}</option>`;
    for (let i = 0; i < data.length; i++) {
        fill += `<option value =${data[i]} >${data[i]}</option>`;
    }
    selec.innerHTML = fill;
}

function tablefill(data,jsonfilename) { // Crea la tabla con los datos 
    let table = "";
    let jsonUrl = "";
    if(jsonfilename) jsonUrl = `json/${jsonfilename}/`; 

    for (let i = 0; i < data.length; i++) {
        table += `
        <div class="dataconteiner" id="cuadro_${data[i].id}">
            <img src= ${data[i].pimag} alt="" srcset="">
                <div class="subcontainer">
                    <h1><a target="_blank" href=${data[i].url}>${data[i].nombre}</a></h1>
                    <p>${data[i].descrip}</p>           
                    <h5>Tipo: ${data[i].tipo}</h5>
                    <h6>Subtipo: ${data[i].Subtipo}</h6>
                </div>
                <a type="button" class="btn btn-warning margen" href="/edit/${jsonUrl}${data[i].id}">Editar</a>
                <a type="button" class="btn btn-danger margen" href="/delete/${data[i].id}">Borrar</a>
        </div>
        `;
    }
    document.getElementById("IdResult").innerHTML = table;
}