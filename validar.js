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
    let email = document.getElementById("email");
    let boton = document.getElementById("boton");
    boton.disabled = false;
    email.addEventListener("change", stateHandle);
    function stateHandle() {
        if (document.getElementById("email").value != "") {
            boton.disabled = false; 
        } else {
        boton.disabled = true;
        }
    }
}