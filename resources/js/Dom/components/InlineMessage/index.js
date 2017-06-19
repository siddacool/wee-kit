import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('inline-message');
    this.fieldName = 'Inline Messages';
    this.description = 'Inline warning messages';
    this.dom = Dom;
  }
}
