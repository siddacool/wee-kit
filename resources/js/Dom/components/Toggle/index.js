import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('toggle');
    this.description = 'Toggle is a modified version of input type "Checkbox"';
    this.dom = Dom;
  }
}
