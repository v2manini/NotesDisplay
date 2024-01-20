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


function selecActDb() {
    let selec = document.getElementById("Idselecdb").value;
    if(selec == optionsDefaul) return;

    if(document.getElementById("idnombdato")) return document.getElementById("idnombdato").value  = selec;
    
    ajaxPost("/getdatadb", {selec}, function(data){ 
        data = JSON.parse(data);
        DataJsonGloabla = data;
        //console.log(data);
        tablefill(data);      
    });
}