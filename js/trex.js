import '../css/estilos.css';

import Dinossauro from './Dinossauro';
import Deserto from './Deserto';
import Nuvem from './Nuvem';
import Cacto from './Cacto';
import Pterossauro from './Pterossauro';
import Gameover from './Gameover';
import EventListener from './EventListener';

const FPS = 300;
const PROB_NUVEM = 1;
const PROB_CACTO = 1;
const PROB_PTEROSSAURO = 1;

let nuvens = [];
global.cactos = [];
global.pterossauros = [];
global.gamestatus = 0; // 0 se ainda não iniciado; 1 iniciado 2 pausado 3 gameover
const deserto = new Deserto();
const gameover = new Gameover(deserto);
const dinossauro = new Dinossauro(deserto);
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
    deserto.mover();
    dinossauro.correr();

    if (Math.floor(Math.random() * 3000) <= PROB_NUVEM) {
      nuvens.push(new Nuvem(deserto));
    }

    if (Math.floor(Math.random() * 3000) <= PROB_CACTO) {
      global.cactos.push(new Cacto(deserto));
    }

    if (Math.floor(Math.random() * 3000) <= PROB_PTEROSSAURO) {
      global.pterossauros.push(new Pterossauro(deserto));
    }

    nuvens.forEach(function (n) {
      n.mover();
    });

    global.cactos.forEach(function (c) {
      if(doElsCollide(c.element, dinossauro.element)) {
        gameover.showendgame();
        global.gamestatus = 3;
      }
      c.mover();
    })

    global.pterossauros.forEach(function (p) {
      if(doElsCollide(p.element, dinossauro.element)) {
        gameover.showendgame();
        global.gamestatus = 3;
      }
      p.mover();
    })

    //Em caso de game over
    //clearInterval(gameLoop);
  }
}

