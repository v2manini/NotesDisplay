const optionsDefaul = "Datos para elegir";
var DataJsonGloabla;

window.addEventListener('load', function(){
    let selec = this.document.getElementById("Idselec");
    if (selec) {
            ajaxPost("/getjson", null, function(data){
                data = JSON.parse(data);
                selecfill(data,selec);      
            });
    }
});

function selecAct() { //Selecciona el json que se quiera leer
    let selec = document.getElementById("Idselec").value;
    if(selec == optionsDefaul) return;

    ajaxPost("/getdata", {selec}, function(data){ 
        data = JSON.parse(data);
        DataJsonGloabla = data;
        tablefill(data,selec);      
    });

    console.log(document.getElementsByClassName("dataconteiner"))

};

function selecfill(data,selec) { // Muestra todos los archivos json en el selector
    let fill = `<option selected>${optionsDefaul}</option>`;
    for (let i = 0; i < data.length; i++) {
        fill += `<option value ="${data[i]}">${data[i]}</option>`;
    }
    selec.innerHTML = fill;
};