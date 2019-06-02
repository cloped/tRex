export default class Pterossauro {
  constructor(deserto) {
    this.heights = [
      '14px',
      '40px',
      '70px',
    ];

    this.status = 0; // 0 aberto 1 fechado
    this.increment = 0;
    this.element = document.createElement('div');
    this.element.className = 'pterossauro aberto';
    this.element.style.right = '-65px';
    this.element.style.bottom = this.heights[Math.floor(Math.random() * 3)];

    deserto.element.appendChild(this.element);
  }

  mover() {
    if (this.element.offsetLeft < -70) {
      this.element.remove();
      return;
    }
    this.element.style.right = `${(parseFloat(this.element.style.right) + 1)}px`;
    
    this.increment++;
    // console.log(this.increment)
    if(this.increment > 150) {
      this.element.className = this.status === 0 ? 'pterossauro fechado' : 'pterossauro aberto';
      this.status = this.status === 0 ? 1 : 0;
      this.increment = 0;
    }
  }
}
