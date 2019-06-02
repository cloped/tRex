export default class Deserto {
  constructor() {
    const element = document.createElement('div');
    element.className = 'deserto';
    document.body.appendChild(element);

    const chao = document.createElement('div');
    chao.className = 'chao';
    chao.style.backgroundPositionX = '0px';
    element.appendChild(chao);

    this.element = element;
    this.chao = chao;
  }

  mover() {
    let movimento = (parseInt(this.chao.style.backgroundPositionX) - 1);
    if (movimento === -1200 ) {
      movimento=0;
    }
    this.chao.style.backgroundPositionX = movimento + 'px';
  }
}
