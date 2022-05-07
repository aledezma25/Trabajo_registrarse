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
function validatePass(){
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let mensaje = document.getElementById("mensaje");


    if (pass1 != pass2)
    {
        mensaje.innerHTML = `<label>Las contraseñas no coinciden</label> `;
    }
    else{
        mensaje.innerHTML = `<label></label> `;
    }

}



/*
function validarpass() {
    var newPassword = document.getElementById('pass1').newPassword.value;
    var minNumberofChars = 8;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
}
*/
/*
function validatePassword1() {
    let pass1 = document.getElementById("pass1").value;
    let mensaje = document.getElementById("mensaje");

    if (pass1.length != 0)
    {
        mensaje.innerHTML = ``;
        if (pass1.length >= 8) {
            mensaje.innerHTML = ``;
            if (pass1.search(/[a-z]/i) > 0) { 
                mensaje.innerHTML = ``; 
                if (pass1.search(/[0-9]/) < 0) {
                    mensaje.innerHTML = ``;
                    console.log("Your password must contain at least one digit."); 
                }
            }
            else{
                mensaje.innerHTML = `<label>Su contraseña debe contener al menos una letra.</label> `;
            }
        }
        else{
            mensaje.innerHTML = `<label>Tu contraseña debe contener al menos 8 caracteres</label> `;
        }
    }
    else
    {
        mensaje.innerHTML = `<label>No puedes dejar el campo vacio</label> `;
    }

    
}
*/

/*
var p = document.getElementById('pass1').value,
errors = [];
if (p.length < 8) {
errors.Push("Your password must be at least 8 characters"); 
}
if (p.search(/[a-z]/i) < 0) {
errors.Push("Your password must contain at least one letter.");
}
if (p.search(/[0-9]/) < 0) {
errors.Push("Your password must contain at least one digit."); 
}
if (errors.length > 0) {
alert(errors.join("\n"));
return false;
}
return true; */