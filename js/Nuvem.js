export default class Nuvem {
  constructor(deserto) {
    this.element = document.createElement('div');
    this.element.className = 'nuvem';
    this.element.style.right = '-70px';
    this.element.style.top = Math.floor(Math.random() * 120) + 'px';
    deserto.element.appendChild(this.element);
  }

  mover() {
    if (this.element.offsetLeft < -70) {
      this.element.remove();
      return;
    }
    this.element.style.right = `${(parseFloat(this.element.style.right) + 0.5)}px`;
  }
}
