import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('inline-dialog');
    this.fieldName = 'Inline Dialog';
    this.description = 'Inline Dialog boxes';
    this.dom = Dom;
  }
}
