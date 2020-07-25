function checkRut(rut, digverif) {
    
    var resul = (rut.length <= 8 && digverif.length == 1);

    if (!resul) return resul;

    var suma = 0;
    var multip = 2;
    for(var i = rut.length -1; i >= 0; i--)
     {alert("del for " + multip +" "+ rut.charAt(i));
        suma += multip * rut.charAt(i);
        if (multip < 7) {
            multip++;

        } else {
            multip = 2;
        }
    }
    alert("sumatoria"+suma);
    var dvEsperado = 11 - (suma % 11);
    alert("dvcalculado"+dvEsperado);
    if (dvEsperado == 10) {
        dvEsperado = 1;
    } else if (dvEsperado == 11) {
        dvEsperado = 0;
    }
    alert(dvEsperado);
    alert(digverif);
    resul = dvEsperado == digverif;
    alert(resul);
    return resul;
}



