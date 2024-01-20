function deleteLink(id) {
    if (confirm(`¿Desea borra el link id = ${id} ?`)) {
        console.log("Si")
        ajaxPost(`/deltedb`,{id} , function(data){ 
            console.log(data);
        });
        HiddeBoxDisplay(id);
    };
};