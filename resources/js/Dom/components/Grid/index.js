import BaseComponent from '../base-component';
import Dom from './dom.html';

export default class extends BaseComponent {
  constructor() {
    super('grid');
    this.description = '12 Column Flexbox Grid';
    this.dom = Dom;
  }
}
