import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('checkbox');
    this.description = 'Checkbox is a set of styled input type "Checkbox"';
    this.dom = Dom;
  }
}
