export default class Dinossauro {
  constructor(deserto) {
    this.sprites = {
      'correr1': '-766px',
      'correr2': '-810px',
      'pulando': '-678px'
    };
    this.status = 0; // 0:correndo; 1:subindo; 2: descendo; 3: agachado
    this.alturaMaxima = '100px';
    this.element = document.createElement('div');
    this.element.className = 'dino';
    this.element.style.backgroundPositionX = this.sprites.correr1;
    this.element.style.backgroundPositionY = '-3px';
    this.element.style.backgroundPositionX = '-766px';
    this.element.style.width = '40px';
    this.element.style.height = '45px';
    this.element.style.bottom = '0px';
    deserto.element.appendChild(this.element);
  }

  correr() {
    if (this.status === 0) {
      this.element.style.backgroundPositionY = '-3px';
      // this.element.style.backgroundPositionX = '-766px';
      this.element.style.width = '40px';
      this.element.style.height = '45px';
      this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX === this.sprites.correr1) ? this.sprites.correr2 : this.sprites.correr1;
    } else if (this.status === 1) {
      this.element.style.backgroundPositionY = '-3px';
      this.element.style.backgroundPositionX = '-766px';
      this.element.style.width = '40px';
      this.element.style.height = '45px';
      this.element.style.backgroundPositionX = this.sprites.pulando;
      this.element.style.bottom = (parseFloat(this.element.style.bottom) + 1) + 'px';

      if (this.element.style.bottom === this.alturaMaxima) {
        this.status = 2;
      }
    } else if (this.status === 2) {
      this.element.style.backgroundPositionY = '-3px';
      this.element.style.backgroundPositionX = '-766px';
      this.element.style.width = '40px';
      this.element.style.height = '45px';
      this.element.style.bottom = (parseFloat(this.element.style.bottom) - 1) + 'px';
      if (this.element.style.bottom === '0px') this.status = 0;
    } else if (this.status === 3) {
      this.element.style.backgroundPositionY = '-19px';
      this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX === '-939px') ? '-1000px' : '-939px';
      this.element.style.width = '62px';
      this.element.style.height = '28px';
    }
  }
}
