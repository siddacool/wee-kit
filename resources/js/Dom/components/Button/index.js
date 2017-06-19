import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('button');
    this.description = 'Buttons are styled anchor tags';
    this.dom = Dom;
  }
}
