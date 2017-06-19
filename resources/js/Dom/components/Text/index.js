import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('text');
    this.fieldName = 'Text Fields';
    this.description = 'Text Fields is the collection of Textbox and Textarea';
    this.active = true;
    this.dom = Dom;
  }
}
