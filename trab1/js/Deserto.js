export default class Deserto {
  constructor() {
    const element = document.createElement('div');
    element.className = 'deserto dia';
    document.body.appendChild(element);

    const chao = document.createElement('div');
    chao.className = 'chao';
    chao.style.backgroundPositionX = '0px';
    element.appendChild(chao);

    this.element = element;
    this.chao = chao;
    this.speed = 1;
  }

  mover() {
    let movimento = (parseInt(this.chao.style.backgroundPositionX) - this.speed);
    if (movimento === -1200) {
      movimento = 0;
    }
    this.chao.style.backgroundPositionX = movimento + 'px';
  }

  trocaTurno() {
    if (this.element.classList.contains('dia')) {
      this.element.className = 'deserto noite';
    } else {
      this.element.className = 'deserto dia';
    }
  }

  maisRapido() {
    this.speed += 0.2;
  }
}
