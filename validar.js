function habilitar(){
    const radio = document.getElementById("flexRadioDefault1");
    if (radio.checked == true)
    {
       let checkbox = document.getElementById("form-checkbox");       
       checkbox.style.display = "block";
    }
    else
    {
        let checkbox = document.getElementById("form-checkbox");       
        checkbox.style.display = "none";  
    }
}

function upperCaseAlert(){
    const nombre = document.getElementById("nombre");
    if (nombre.value != "")
    {
        alert(`${nombre.value.toUpperCase()}`)
    }
}


function emailEssay()
{
    document.getElementById("boton").disabled = true;
}