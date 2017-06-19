import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('select');
    this.description = 'Select is a set of stylized form element "Select"';
    this.dom = Dom;
  }
}
