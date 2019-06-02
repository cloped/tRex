export default class Cacto {
  constructor(deserto) {
    this.element = document.createElement('div');
    this.element.className = 'cacto';
    this.element.style.right = '-25px';
    deserto.element.appendChild(this.element);
  }

  mover() {
    if (this.element.offsetLeft < -70) {
      this.element.remove();
      return;
    }
    this.element.style.right = `${(parseFloat(this.element.style.right) + 1)}px`;
  }
}
