function GetAllData() {
    ajaxPost("/getall", null, function(data){ 
        data = JSON.parse(data);
        DataJsonGloabla = data;
        tablefill(data);      
    });
};