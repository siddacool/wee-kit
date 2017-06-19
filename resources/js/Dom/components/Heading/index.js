import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('heading');
    this.fieldName = 'Headings';
    this.description = 'Heading is a set of styled headings and paragraphs';
    this.dom = Dom;
  }
}
