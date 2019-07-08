export default class Placar {
  constructor(deserto) {
    this.elementwrapper = document.createElement('div');
    this.elementwrapper.className = 'placar wrapper';
    deserto.element.appendChild(this.elementwrapper);

    this.digitos = [];

    this.placar = '00000';
    for (let i = 0; i < this.placar.length; ++i) {
      this.digitos[i] = document.createElement('div');
      this.digitos[i].className = `placar digito${this.placar[i]}`;
      this.elementwrapper.appendChild(this.digitos[i]);
    };
  }

  incrementa() {
    String.prototype.replaceAt = function (index, replacement) {
      if (index == 0) {
        return replacement + this.substr(index + 1, this.length);
      }
      return this.substr(0, index) + replacement + this.substr(index + 1, this.length);
    }

    let aux = parseInt(this.placar);
    aux++;

    for (let i = this.placar.length - 1; i >= 0; --i) {
      let gamb = Math.trunc(aux % 10);
      this.placar = this.placar.replaceAt(i, gamb);
      this.digitos[i].className = `placar digito${gamb}`;
      aux = aux > 0 ? aux / 10 : 0;
    };

    console.log(this.placar);
  }
}