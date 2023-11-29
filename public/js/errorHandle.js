function Errorhandle(errortype) {
    let alert = `
    <div id="IdAlert" class="alert alert-dismissible alert-danger">
        <button onclick="closeAlert()" type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Oh no</strong> ${errortype}.
    </div> 
    `;
    document.getElementById("IdErrorAlert").innerHTML = alert;
}

function closeAlert() {
    document.getElementById("IdAlert").style.display ="none";
}