export default class Gameover {
  constructor(deserto) {
    this.elementlabel = document.createElement('div');
    this.elementlabel.className = 'gameover label';
    deserto.element.appendChild(this.elementlabel);

    this.elementbutton = document.createElement('div');
    this.elementbutton.className = 'gameover button';
    deserto.element.appendChild(this.elementbutton);
  }

  showendgame() {
    this.elementbutton.style.display= 'block';
    this.elementlabel.style.display= 'block';
  }
}