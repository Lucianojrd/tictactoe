var tablero = ["", "", "", "", "", "", "", "", ""];
var turno = "X";
var ganador = false;

function marcar(indice) {
  var celda = document.getElementById("celda_" + indice);
  if (tablero[indice] == "" && !ganador) {
    celda.innerHTML = turno;
    tablero[indice] = turno;
    turno = turno == "X" ? "O" : "X";
    document.getElementById("mensaje").innerHTML = "Turno del jugador " + turno;
    verificar();
  }
}

function verificar() {
  var combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < combinaciones.length; i++) {
    var a = combinaciones[i][0];
    var b = combinaciones[i][1];
    var c = combinaciones[i][2];
    if (
      tablero[a] == tablero[b] &&
      tablero[b] == tablero[c] &&
      tablero[a] != ""
    ) {
      document.getElementById("mensaje").innerHTML =
        "El jugador " + tablero[a] + " ha ganado";
      ganador = true;
      pintar(a, b, c);
      break;
    }
  }
  if (tablero.indexOf("") == -1 && !ganador) {
    document.getElementById("mensaje").innerHTML =
      "El juego ha terminado en empate";
    ganador = true;
  }
}

function pintar(a, b, c) {
  document.getElementById("celda_" + a).style.backgroundColor = "
#96ccd8";
  document.getElementById("celda_" + b).style.backgroundColor = "
#96ccd8";
  document.getElementById("celda_" + c).style.backgroundColor = "
#96ccd8";
}

function reiniciar() {
  location.reload();
}
