window.addEventListener('load', function(){
    let selec = this.document.getElementById("Idselecdb");
    if (selec) {
                ajaxPost("/getjsondb", null, function(data){
                    data = JSON.parse(data);
                    //console.log(data);
                    selecfill(data,selec);      
                });
    }
});

window.addEventListener('load', function(){ // PB Load
    let selec = this.document.getElementById("IdselecPB");
    if (selec) {
                ajaxPost("/getjsondb?DB=PB", null, function(data){
                    data = JSON.parse(data);
                    selecfill(data,selec);      
                });
    }
});

function selecActDb() {
    let selec = document.getElementById("Idselecdb").value;
    if(selec == optionsDefaul) return;

    ajaxPost("/getdatadb", {selec}, function(data){ 
        data = JSON.parse(data);
        DataJsonGloabla = data;
        //console.log(data);
        tablefill(data);      
    });
}


function selecActPB () { // Pocket base
    let selec = document.getElementById("IdselecPB").value;
    if(selec == optionsDefaul) return;

    ajaxPost("/getdatadb?DB=PB", {selec}, function(data){ 
        data = JSON.parse(data);
        console.log("getjsondb?DB=PB ",data);
        DataJsonGloabla = data;
        tablefill(data);      
    });
}