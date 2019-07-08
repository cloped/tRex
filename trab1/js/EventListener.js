const EventListener = (deserto, dinossauro, nuvens, initCallback, gameover) => {
  window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp' && dinossauro.status == 0 && global.gamestatus !== 0) {
      dinossauro.status = 1;
    };

    if (e.key == 'ArrowUp' && global.gamestatus == 0) {
      initCallback();
    }

    if (e.key == 'p') {
      if (global.gamestatus === 1) {
        global.gamestatus = 2;
      } else if (global.gamestatus === 2) {
        global.gamestatus = 1;
      }
    }

    if (e.key == 'ArrowDown' && global.gamestatus == 1 && dinossauro.status === 0) {
      dinossauro.status = 3;
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowDown' && global.gamestatus == 1) {
      dinossauro.status = 0;
    }
  });

  document.getElementById('gameoverbutton').addEventListener('mousedown', (e) => {
    if (global.gamestatus == 3) {
      gameover.hideendgame();

      global.cactos.forEach(function (c) {
        c.element.remove();
      })
  
      global.pterossauros.forEach(function (p) {
        p.element.remove();
      })

      global.cactos = [];
      global.pterossauros = [];
      global.gamestatus = 1;
    }
  });
}

export default EventListener;
