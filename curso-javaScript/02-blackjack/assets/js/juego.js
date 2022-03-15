(() => {
  "use strict";
  let deck = [];
  let puntosJugadores = [];

  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevo = document.querySelector("#btnNuevo");

  const divCartas = document.querySelectorAll(".divCartas");

  const puntosHTML = document.querySelectorAll("small");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    console.log(deck);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);

    puntosHTML[0].innerText = puntosJugadores[0];
    puntosHTML[1].innerText = puntosJugadores[1];
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let letra of ["C", "D", "H", "S"]) {
        deck.push(i + letra);
      }
    }
    for (let i of ["A", "J", "Q", "K"]) {
      for (let letra of ["C", "D", "H", "S"]) {
        deck.push(i + letra);
      }
    }
    return _.shuffle(deck);
  };

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  const acumulaPuntos = (turno, carta) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/images/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartas[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    setTimeout(() => {
      confirm(
        puntosJugadores[0] > 21
          ? "Has perdido"
          : puntosJugadores[1] > 21 || puntosJugadores[0] > puntosJugadores[1]
          ? "Has ganado"
          : "Has perdido"
      );
    }, 20);
  };

  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumulaPuntos(puntosJugadores.length - 1, carta);
      crearCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) break;
    } while (puntosComputadora < puntosMinimos);

    determinarGanador();
  };

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    acumulaPuntos(0, carta);

    crearCarta(carta, 0);

    if (puntosJugadores[0] > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    } else if (puntosJugadores[0] === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
    document.querySelectorAll("img").forEach((element) => {
      element.remove();
    });
  });
  return {
    nuevoJuego: inicializarJuego,
  };
})();
