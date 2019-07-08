import '../css/estilos.css';

import Dinossauro from './Dinossauro';
import Deserto from './Deserto';
import Nuvem from './Nuvem';
import Cacto from './Cacto';
import Pterossauro from './Pterossauro';
import Gameover from './Gameover';
import EventListener from './EventListener';
import Placar from './Placar';

const FPS = 300;
const PROB_NUVEM = 1;
const PROB_CACTO = 1;
const PROB_PTEROSSAURO = 1;
let MAX_SAFE = 70;

let nuvens = [];
global.cactos = [];
global.pterossauros = [];
global.gamestatus = 0; // 0 se ainda não iniciado; 1 iniciado 2 pausado 3 gameover
const deserto = new Deserto();
const gameover = new Gameover(deserto);
const dinossauro = new Dinossauro(deserto);
const placar = new Placar(deserto);
let contadorframes = 0;
let safe = 0;

global.pterossauros.push(new Pterossauro(deserto));
EventListener(deserto, dinossauro, nuvens, init, gameover);

function init() {
  global.gamestatus = 1;
  setInterval(run, 1000 / FPS);
}

const doElsCollide = function (el1, el2) {
  el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
  el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
  el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
  el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

  return !((el1.offsetBottom < el2.offsetTop) ||
    (el1.offsetTop > el2.offsetBottom) ||
    (el1.offsetRight < el2.offsetLeft) ||
    (el1.offsetLeft > el2.offsetRight))
};

function run() {
  if (global.gamestatus === 1) {
    contadorframes++;
    if (contadorframes % (6000) === 0) {
      deserto.trocaTurno();
    }

    if (contadorframes % (100) === 0) {
      placar.incrementa();
    }

    deserto.mover();
    if (contadorframes % (1000) === 0) {
      deserto.maisRapido();
      MAX_SAFE -= 0.5;
    }
    dinossauro.correr();

    if (Math.floor(Math.random() * 3000) <= PROB_NUVEM) {
      nuvens.push(new Nuvem(deserto));
    }

    if (Math.floor(Math.random() * 3000) <= PROB_CACTO && safe > MAX_SAFE) {
      global.cactos.push(new Cacto(deserto));
      safe = 0;
    } else if (Math.floor(Math.random() * 3000) <= PROB_PTEROSSAURO && safe > MAX_SAFE) {
      global.pterossauros.push(new Pterossauro(deserto));
      safe = 0;
    }

    safe++;

    nuvens.forEach(function (n) {
      n.mover();

      if (contadorframes % (1000) === 0) {
        n.maisRapido();
      }
    });

    global.cactos.forEach(function (c) {
      if (doElsCollide(c.element, dinossauro.element)) {
        gameover.showendgame();
        global.gamestatus = 3;
      }
      if (contadorframes % (1000) === 0) {
        c.maisRapido();
      }
      c.mover();
    })

    global.pterossauros.forEach(function (p) {
      if (doElsCollide(p.element, dinossauro.element)) {
        gameover.showendgame();
        global.gamestatus = 3;
      }
      if (contadorframes % (1000) === 0) {
        p.maisRapido();
      }
      p.mover();
    })
  }
}

