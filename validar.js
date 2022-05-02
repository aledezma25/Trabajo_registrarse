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
