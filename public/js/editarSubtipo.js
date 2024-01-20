function quickEdit(id) {
    let Subtipo = prompt("Pone un nuevo subtipo", document.getElementById("Idselecdb").value );
    if (Subtipo == null || Subtipo == "") {
        Subtipo = "Subtipo Invalido";
    } else {
        console.log("Funcó")
        ajaxPost(`/edit/subtipo/`,{Subtipo:Subtipo,id:id} , function(data){ 
            console.log(data);
        });
        HiddeBoxDisplay(id);
    }
};

function HiddeBoxDisplay(id) {
    document.getElementById(`cuadro_${id}`).style.display = "none";
};