export class Command {
  constructor(public elt: Element) {
    const startBtn = this.elt.querySelector('button.start');
    startBtn.addEventListener('click', event => {
      console.log('start');
    });
  }

}
