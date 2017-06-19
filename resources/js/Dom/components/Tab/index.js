import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('tab');
    this.fieldName = 'Tabs';
    this.description = 'Tab navigation';
    this.dom = Dom;
  }
}
