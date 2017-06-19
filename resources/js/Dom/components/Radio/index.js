import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('radio');
    this.description = 'Radio is a set of styled input type "Radio"';
    this.dom = Dom;
  }
}
