export default class Dinossauro {
  constructor(deserto) {
    this.sprites = {
      'correr1': '-766px',
      'correr2': '-810px',
      'pulando': '-678px'
    };
    this.status = 0; // 0:correndo; 1:subindo; 2: descendo; 3: agachado
    this.alturaMaxima = '80px';
    this.element = document.createElement('div');
    this.element.className = 'dino';
    this.element.style.backgroundPositionX = this.sprites.correr1;
    this.element.style.bottom = '0px';
    deserto.element.appendChild(this.element);
  }

  correr() {
    if (this.status == 0) {
      this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.correr1) ? this.sprites.correr2 : this.sprites.correr1;
    } else if (this.status == 1) {
      this.element.style.backgroundPositionX = this.sprites.pulando;
      this.element.style.bottom = (parseFloat(this.element.style.bottom) + 1) + 'px';

      if (this.element.style.bottom == this.alturaMaxima) {
        this.status = 2;
      }
    } else if (this.status == 2) {
      this.element.style.bottom = (parseFloat(this.element.style.bottom) - 1) + 'px';
      if (this.element.style.bottom == '0px') this.status = 0;
    }
  }
}
