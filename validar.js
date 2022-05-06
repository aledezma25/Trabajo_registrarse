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
    
}











































/*


var nombre = document.getElementById("nombre");
var p1 = document.getElementById("pass1").value;
var p2 = document.getElementById("pass2").value;
var error = document.getElementById("error");
error.style.color = 'red';
function enviarFormulario()
{
    console.log("Enviando Formulario...");
        var mensajesError = [];
        if(nombre.value === null || nombre.value === ''){
            mensajesError.push("Ingresa tu nombre");
        }

        error.innerHTML = mensajesError.join(", ");
    return false;
}

 INTENTOS FALLIDOS
function verificar(){
    let nombre = document.getElementById("nombre").value;
    if (nombre == "" )
    {
        console.log("El nombre esta vacio");
    }
    else{
        
    }
}


/*function seleccion{
    let 
    let input1= document.getElementById("FlexRadioDefault1")
    if(input1.checked)
}








function validarpass{
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    var espacios = false;
    var cont = 0;
    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
            cont++;
}
   
    if (espacios) {
      alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }
}
*/