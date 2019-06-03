export default class Cacto {
  constructor(deserto) {
    this.element = document.createElement('div');
    this.element.className = 'cacto';
    this.element.style.right = '-25px';
    deserto.element.appendChild(this.element);
    this.speed = 1;
  }

  mover() {
    if (this.element.offsetLeft < -70) {
      this.element.remove();
      return;
    }
    this.element.style.right = `${(parseFloat(this.element.style.right) + this.speed)}px`;
  }

  maisRapido() {
    this.speed += 0.2;
  }
}
