
var nd = parseFloat(prompt("bien venido al juego del cachipún. Para jugar usted debe indicar el numero de duelos", ""));



console.log(cachi);
var pun = Math.floor(Math.random() * 3);
//console.log(pun);
var eleccion = "sin valor";
var vlcg = 0;
var vhg = 0;
var ve = 0;

//1.-piedra 2.-papel 3.-tijera
//pun es la maquina
for (i = 0; i < nd; i++) {

    do {
        alert("A continuación seleccione una opción 1.- piedra 2.- papel 3.- tijera");
        var cachi = parseFloat(prompt("ingrese su opción 1, 2 o 3", ""));
        switch (cachi) {

            case 1:
                eleccion = true;
                cachi = 0;
                break
            case 2:
                eleccion = true;
                cachi = 1;
                break
            case 3:
                eleccion = true;
                cachi = 2;
                break

            default:
                eleccion = false;

        }
    }
    while (eleccion == false)

    if (cachi == pun) {
        alert("empate");
        ve++;
    }
    else if (cachi == 0 && pun == 1) {
        alert("La casa gana");
        vlcg++;
    }
    else if (cachi == 0 && pun == 2) {
        alert("Has ganado");
        vhg++;
    }
    else if (cachi == 1 && pun == 0) {
        alert("Has ganado");
        vhg++;
    }
    else if (cachi == 1 && pun == 2) {
        alert("La casa gana");
        vlcg++;
    }
    else if (cachi == 2 && pun == 0) {
        alert("La casa gana");
        vlcg++;
    }
    else if (cachi == 2 && pun == 1) {
        alert("Has ganado");
        vhg++;
    }
}

if (vhg > vlcg) {
    alert("Has ganado el encuentro contra la máquina");

} else if (vhg < vlcg) {
    alert("La máquina ha ganado este encuentro");
}
else {
    alert("Han empatado la máquina y tú");
}
